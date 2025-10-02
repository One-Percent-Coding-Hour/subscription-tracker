/**
 * @module utils/jwt
 * @description Utility functions for verifying JSON Web Tokens (JWT).
 */

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @function verifyAccessToken
 * @description Verifies a JWT and returns the decoded payload.
 * @param {string} token - The JWT to be verified.
 * @returns {object|string} The decoded payload if the token is valid.
 * @throws Will throw an error if the token is missing, expired or invalid.
 */
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log(err);
    const error = new Error("Authentication failed, missing or invalid token");
    error.status = 401;
    throw error;
  }
};

export { verifyAccessToken };
