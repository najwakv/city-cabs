import userModel from "../model/user.js";
import jwt from "jsonwebtoken";

export const tokenMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  try {
    if (token) {
      const jwtVerify = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await userModel.findOne({ _id: jwtVerify.userId });
      req.userId = user._id;
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};
