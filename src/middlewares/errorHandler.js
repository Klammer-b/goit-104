const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({
    message: 'Something wrong on our side',
    error: err.message,
  });
};

export default errorHandlerMiddleware;
