import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json({
      message: err.name,
      error: err.message,
    });
  }

  if (err.isJoi) {
    return res.status(400).json({
      message: 'Validation error occurred',
      error: err.message,
      details: err.details.map((error) => ({
        message: error.message,
        path: error.path,
      })),
    });
  }

  if (err instanceof MongooseError) {
    return res.status(500).json({
      message: 'MongooseError',
      error: err.message,
    });
  }

  res.status(500).json({
    message: 'Something wrong on our side',
    error: err.message,
  });
};
