/**
 * @module middlewares/error.middleware.js
 * @description Middleware for handling errors in Express.js applications.
 */

/**
 * @function errorHandler
 * @description central error handler for handling errors and their status code.
 * @param {Error} error - The error object thrown from any part of the app.
 * @param {Object} request - The Express request object.
 * @param {Object} response - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {void} Sends a JSON response with the error message and status code.
 */
const errorHandler = (error, _request, response, _next) => {
  console.error("Error handler:", error);
  response.status(error.status || 500).json({
    status: "failed",
    message: error.message || "Internal Server Error",
  });
};

export default errorHandler;
