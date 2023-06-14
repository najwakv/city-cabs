import express from "express";
import { forgotPasswordOtp, forgotPasswordOtpVerify, getDriverList, getUserData, getVehicleList, initializeRazorpay, login, otp, otpVerify, rating, resendOtp, resetPassword, tokenVerify, tripHistory, verifyPayment } from "../controllers/userControllers.js";
import { tokenMiddleware } from "../middleware/userTokenMiddleware.js";
const router = express.Router();

router.post('/login', login );
router.post('/otp', otp);
router.post('/otpVerify', otpVerify);
router.post('/forgotPasswordOtp',forgotPasswordOtp);
router.post('/forgotPasswordOtpVerify', forgotPasswordOtpVerify);
router.post('/resetPassword', resetPassword);
router.post('/initializePayment',tokenMiddleware,initializeRazorpay)
router.post('/verifyPayment',tokenMiddleware,verifyPayment)
router.post('/rating',tokenMiddleware,rating)
router.post('/getUserData',tokenMiddleware,getUserData)
router.post('/tripHistory',tokenMiddleware,tripHistory)

router.get("/tokenVerify", tokenVerify)
router.get("/resendOtp", resendOtp)
router.get("/getVehicleList",tokenMiddleware, getVehicleList)
router.get("/getDriverList",tokenMiddleware, getDriverList)

export default router;