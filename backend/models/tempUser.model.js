/**
 * @module models/tempUser.model.js
 * @description holds model for storing users temporarily until email is verified
 */

import mongoose from "mongoose";

const tempUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Fullname is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/.+@.+\..+/, "Invalid email: Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  verificationCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verificationCodeExpiresAt: {
    type: Date,
    required: [true, "Verification expiry time is required"],
  },
  // This field automatically delete the user document after 24 hours if user is not verified
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

const TempUser = mongoose.model("TempUser", tempUserSchema);

export default TempUser;
