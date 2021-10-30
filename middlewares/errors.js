import ErrorHandler from '../utils/errorHandler';

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;
  console.log(err);
  console.log(err.length);

  // WRONG MONGOOSE ID ERROR
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;

    error = new ErrorHandler(message, 400);
  }

  // MONGOOSE VALIDATION ERROR HANDLER
  if (err.name === 'ValidationError') {
    if (err.length === undefined) {
      const message = err.message;
      error = new ErrorHandler(message, 400);
    } else {
      const message = Object.values(err.errors).map((value) => value.messagge);
      error = new ErrorHandler(message, 400);
    }
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
