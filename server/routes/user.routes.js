import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getPaymentDetails,
  makePayment,
  registerFoodComplaint,
  getFoodComplaints,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

router.route("/current-user").get(verifyJWT, getCurrentUser);

router.route("/get-payment-details").get(getPaymentDetails);

router.route("/create-checkout-session").post(makePayment);

router.route("/register-complaint").post(registerFoodComplaint);

router.route("/get-complaint").get(getFoodComplaints);

export default router;
