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
  },
  { timestamps: true }
);

//Returns the user object with the password data removed
userSchema.set("toJSON", {
  transform: (_doc, userObject) => {
    delete userObject.password;
    return userObject;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
