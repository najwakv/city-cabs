import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import bookingModel from "../model/booking.js";
import driverModel from "../model/driver.js";

export default function initializeSocket(httpServer) {
  // const io = new Server(httpServer, {
  //   cors: {
  //     origin: ["http://localhost:2000", "http://localhost:3000"],
  //     credentials: true,
  //   },
  // });
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    // console.log(`⚡: ${socket.id} user just connected!`);

    // Event handler for the "liveLocation" event
    socket.on("liveLocation", async (data) => {
      const location = data.liveLocation;
      const token = data.token;
      try {
        const decoded = jwt.verify(
          token,
          process.env.TOKEN_SECRET,
          async (error, result) => {
            if (error) {
              io.emit("error", { message: "No driver Exist" });
            }
            if (result) {
              const id = result.driverId;
              try {
                const driver = await driverModel.findById(id);
                if (!driver) {
                  io.emit("error", { message: "driver not found" });
                }
                driver.latitude = location.latitude;
                driver.longitude = location.longitude;
                await driver.save();
              } catch (error) {
                io.emit("error", { message: "driver not found" });
              }
            }
          }
        );
      } catch (error) {
        io.emit("error", { message: "Could store live-location" });
      }
    });

    socket.on("rideConfirmation", (data) => {
      const uniqueData = data.uniqueData;
      if (uniqueData && uniqueData.length > 0) {
        try {
          const parentCar = data.parentSelectedCar;
          const rideDistance = data.rideDistance;
          let price;
          if (rideDistance <= 3) {
            price = parentCar.minCharge;
          } else {
            price = (rideDistance - 3) * parentCar.price + parentCar.minCharge;
          }
          const token = data.token;
          try {
            if (token) {
              jwt.verify(
                token,
                process.env.TOKEN_SECRET,
                async (error, result) => {
                  if (error) {
                    console.error(error);
                  }
                  if (result) {
                    const userId = result.userId;
                    const newRequest = new bookingModel({
                      pickup: data.pickup,
                      dropoff: data.dropoff,
                      service: parentCar.service,
                      fare: price,
                      userId: userId,
                      drivers: data.uniqueData,
                    });

                    await newRequest.save().then(async (savedRequest) => {
                      const requestId = savedRequest._id;
                      const insert = await bookingModel.findOne({
                        _id: requestId,
                      });
                      insert.drivers[0].status = true;
                      await insert.save();

                      // Fetch and emit notifications to the connected driver
                      global.fetchNotifications = async () => {
                        try {
                          const notifications = await bookingModel.find({
                            _id: requestId,
                          });
                          const filteredNotifications = notifications.filter(
                            (notification) => notification.status === "pending"
                          );
                          io.emit("notification", filteredNotifications);
                        } catch (error) {
                          console.error("Error fetching notifications:", error);
                        }
                      };

                      // Initial fetch of notifications on connection
                      fetchNotifications();
                    });
                  }
                }
              );
            }
          } catch (error) {
            console.error(error);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        io.emit("No Drivers");
      }
    });

    socket.on("acceptRequest", async (data) => {
      try {
        const notificationId = data.notificationId;
        const driverId = data.driverId;
        if (driverId) {
          const otpGenerator = () => {
            let otp = "";
            return new Promise((resolve, reject) => {
              for (let i = 0; i < 6; i++) {
                otp += Math.floor(Math.random() * 10);
              }
              resolve(otp);
            });
          };
          otpGenerator().then(async (otp) => {
            // console.log("Generated OTP:", otp);
            try {
              // Update bookingModel
              const booking = await bookingModel.findOneAndUpdate(
                { _id: notificationId },
                { driverId: driverId, status: "booked", otp: otp },
                { new: true }
              );
              // Calculate rating
              const ratings = await bookingModel
                .find({ driverId: driverId, status: "completed" })
                .select("rating");

              let roundedAverageRating = 0;

              if (ratings.length > 0) {
                const totalRating = ratings.reduce((sum, rating) => {
                  if (typeof rating.rating === "number") {
                    return sum + rating.rating;
                  } else {
                    return sum;
                  }
                }, 0);

                const averageRating = totalRating / ratings.length;
                roundedAverageRating = Math.floor(averageRating);
              }
              const liveLocation = await driverModel.findById(
                { _id: driverId },
                { latitude: 1, longitude: 1, _id: 0 }
              );
              const latitude = liveLocation.latitude;
              const longitude = liveLocation.longitude;
              const locationArray = [longitude, latitude];

              io.emit("liveLocationUpdate", locationArray);
              io.emit("driverArriving", booking);
              io.emit("driverRating", roundedAverageRating);
            } catch (error) {
              console.error("Error updating:", error);
            }
          });
        }
      } catch (error) {
        console.error("Error accepting notification:", error);
      }
    });

    socket.on("declineRequest", async (data) => {
      const { driverId, notificationId } = data;

      // Done by me
      const booking = await bookingModel.findOne({ _id: notificationId });
      const trueIndex = booking.drivers.findIndex(
        (driver) => driver.status === true
      );
      if (trueIndex !== -1) {
        booking.drivers[trueIndex].status = false;
        if (trueIndex < booking.drivers.length - 1) {
          booking.drivers[trueIndex + 1].status = true;
        }
        const movedToNextDriver = await bookingModel.findByIdAndUpdate(
          booking._id,
          booking,
          { new: true }
        );
        if (movedToNextDriver && trueIndex !== booking.drivers.length - 1) {
          fetchNotifications();
        } else {
          io.emit("No Drivers");
        }
      }
    });

    socket.on("noDriversAvailable", function () {
      io.emit("No Drivers");
    });

    socket.on("verifyRide", async (data) => {
      try {
        const otp = data.otp;
        const notificationId = data.notificationId;
        const verifyData = await bookingModel.findOne({
          _id: notificationId,
          otp: otp,
        });
        if (verifyData) {
          io.emit("verifyData", verifyData);
          io.emit("verifyRideResponse", {
            message: "Ride verified successfully",
          });
        } else {
          io.emit("notVerifyRideResponse", { message: "Invalid otp" });
        }
      } catch (error) {
        console.error("error verifying ride");
      }
    });

    socket.on("handlePayment", async (data) => {
      const notificationId = data.verifyData.notificationId;
      const request = await bookingModel.find({ _id: notificationId });
      io.emit("proceedPayment", request);
    });

    socket.on("offlinePayment", async (data) => {
      const notificationId = data.notificationId;
      const request = await bookingModel.find({ _id: notificationId });
      io.emit("proceedOfflinePayment", request);
    });

    socket.on("confirmOfflinePayment", async (data) => {
      const id = data.notificationId;
      await bookingModel.findOneAndUpdate(
        { _id: id },
        { $set: { status: "completed", payment: "offline" } }
      );
    });

    socket.on("paymentSuccess", () => {
      io.emit("verifyPaymentSuccess");
    });

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
    });
  });
}
