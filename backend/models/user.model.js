/**
 * @module models/user.model.js
 * @description holds the permanent user models after email is verified
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Fullname is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Invalid email: Please enter a valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters long"],
    },
    subscriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscription",
      },
    ],
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordTokenExpiresAt: {
      type: Date,
      default: null,
    },
    notificationPreferences: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      pushNotifications: {
        type: Boolean,
        default: false,
      },
    },
    currencyPreference: {
      type: String,
      enum: ["USD", "EUR", "NGN"],
      default: "NGN",
    },
  },
  { timestamps: true }
);

//Returns the user object with the password data removed
userSchema.set("toJSON", {
  transform: (_doc, userObject) => {
    delete userObject.password;
    delete userObject.resetPasswordToken;
    delete userObject.resetPasswordTokenExpiresAt;
    return userObject;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
