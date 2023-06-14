import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import driverInstance from "../../../instance/driverInstance";

function DriverProfileContent() {
  const [driverDetails, setDriverDetails] = useState(null);
  const [tripHistory, setTripHistory] = useState([]);
  const [driverId, setDriverId] = useState(null);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("driverToken"));

  useEffect(() => {
    driverInstance
    .post("/getDriverDetails", { token })
    .then((response) => {
      setDriverDetails(response.data.driverDetails);
      setDriverId(response.data.driverDetails._id);
    })
    .catch((error) => {
      const { response, message } = error;
      const errorMessage = response ? response.data.message : message;
      toast.error(errorMessage);
    });
  }, []);
  
  useEffect(() => {
    // Fetch trip history
    async function fetchTripHistory() {
      try {
        const response = await driverInstance.post("/tripHistory", {
          driverId,
        });
        setTripHistory(response.data.tripHistory);
      } catch (error) {
        console.error("Error fetching trip history:", error);
      }
    }
    fetchTripHistory();
  }, [driverId]);
  return (
    <div className="h-screen flex flex-col">
      <ButtonContainer>
        <BackButton
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
          onClick={() => navigate("/driver")}
        ></BackButton>
      </ButtonContainer>
      {/* Profile Section */}
      {driverDetails && (
        <div className="flex flex-col items-center bg-gray-200 p-8 h-1/3">
          {/* Profile Photo */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />

          {/* User Name */}
          <h2 className="text-xl font-bold mb-2">{driverDetails.userName}</h2>

          {/* Contact Number */}
          <p className="text-gray-700 mb-2">Contact: {driverDetails.phone}</p>

          {/* Overall Rating */}
          {/* <p className="text-gray-700 mb-2">Rating: 4.5/5</p> */}

          {/* Cab Type and Register Number */}
          <p className="text-gray-700">
            Cab: {driverDetails.vehicle} (Reg. No: {driverDetails.registerNo})
          </p>
        </div>
      )}

      {/* Trip History Section */}
      <div className="flex flex-col p-8 h-2/3">
        <h3 className="text-xl font-bold mb-4 uppercase">Trip History</h3>

        {/* Trip cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Individual trip cards */}
          {tripHistory.map((trip, index) => {
            return (
              <div className="bg-white shadow-md rounded-lg p-4" key={index}>
                <h4 className="text-lg font-bold mb-2 uppercase">
                  Trip {index + 1}
                </h4>
                <p className="text-gray-700 mb-2">Pickup:{trip.pickup}</p>
                <p className="text-gray-700 mb-2">Drop-off:{trip.dropoff}</p>
                {/* <p className="text-gray-700 mb-2">Cab: {trip.service}</p> */}
                <p className="text-gray-700 mb-2">Payment: {trip.payment}</p>
                <p className="text-gray-700 mb-2">Fare: RS {trip.fare}</p>
                <p className="text-gray-700">Rating: {trip.rating}</p>
                <p className="text-gray-700">Description: {trip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DriverProfileContent;

const ButtonContainer = tw.div`
bg-gray-200 px-4
`;
const BackButton = tw.img`
h-12 cursor-pointer
`;
