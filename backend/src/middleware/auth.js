import jwt from "jsonwebtoken";

import { findUserDB } from "../domain/users.js";
import sendDataResponse from "../utils/responses.js";

const validateAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return sendDataResponse(res, 401, "Unauthorized: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return sendDataResponse(res, 401, "Unauthorized: Invalid token");
    }

    const user = await findUserDB(decoded.username);
    delete user.password;

    if (!user) {
      return sendDataResponse(res, 404, "User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export default validateAuthentication;
