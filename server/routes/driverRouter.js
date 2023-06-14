import express from "express";
import { forgotPasswordOtp, forgotPasswordOtpVerify, getDriverDetails, getDriverId, getRideDetails, getVehicleData, login, otp, otpVerify, resendOtp, resetPassword, tokenVerify, tripHistory } from "../controllers/driverControllers.js";
import { tokenMiddleware } from "../middleware/driverTokenMiddleware.js";
const router = express.Router();

router.post('/login', login);
router.post('/otp', otp);
router.post('/otpVerify', otpVerify);
router.post('/forgotPasswordOtp',forgotPasswordOtp);
router.post('/forgotPasswordOtpVerify', forgotPasswordOtpVerify);
router.post('/resetPassword', resetPassword)
router.post('/getDriverId',tokenMiddleware, getDriverId)
router.post('/getDriverDetails',tokenMiddleware,getDriverDetails)
router.post('/tripHistory',tokenMiddleware,tripHistory)
router.post('/getRideDetails',tokenMiddleware, getRideDetails)


router.get('/verifyToken', tokenVerify);
router.get("/resendOtp", resendOtp);
router.get('/getVehicleData',getVehicleData)


export default router;