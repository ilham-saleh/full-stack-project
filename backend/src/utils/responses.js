const STATUS_MESSAGES = {
  200: "success",
  201: "success",
  400: "fail",
  401: "fail",
  403: "fail",
  404: "fail",
  406: "fail",
  500: "error",
};

export default function sendDataResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    error: payload,
  });
}
