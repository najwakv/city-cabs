import jwt from "jsonwebtoken";
import adminModel from "../model/admin.js";

export const tokenMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (token) {
      const jwtVerify = jwt.verify(token, process.env.TOKEN_SECRET);
      const admin = await adminModel.findOne({ _id: jwtVerify.driverId });
      req.adminId = admin._id;
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};
