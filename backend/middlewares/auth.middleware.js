/**
 * @module middleware/auth.middleware.js
 * @description Middleware for authenticating users
 */
import { verifyAccessToken } from "../utils/jwt";

/**
 * @function authenticate
 * @description Middleware to authenticate users and ensure they are logged in to acess resources.
 * @param {Object} request - The Express request object.
 * @param {Object} response - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {void} Calls next() if authentication is successful, otherwise sends the error to
 * the error handler.
 */
const authenticateUser = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = new Error("Unauthorized, Please login to continue");
    error.status = 401;
    return next(error);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token);
    request.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticateUser;
