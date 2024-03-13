import jwt from "jsonwebtoken";

import { findUserDB } from "../domain/users.js";
import sendDataResponse from "../utils/responses.js";
import generateToken from "../utils/generateToken.js";

// export const validateAuthentication = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt;
//     // const { token } = generateToken();
//     console.log("TOKEN", token);

//     if (!token) {
//       return sendDataResponse(res, 401, "Unauthorized: No token provided");
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded) {
//       return sendDataResponse(res, 401, "Unauthorized: Invalid token");
//     }

//     const user = await findUserDB(decoded.username);
//     delete user.password;

//     if (!user) {
//       return sendDataResponse(res, 404, "User not found");
//     }

//     req.user = user;

//     next();
//   } catch (error) {
//     console.log(error);
//     return sendDataResponse(res, 500, "Internal server error");
//   }
// };

const verifyToken = async (req, res, next) => {
  //   const header = req.header("Authorization");
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(400).json({ error: "Missing auth token" });
  }

  //   const [_, token] = header.split(" ");
  const token = tokenHeader.split(" ")[1];
  console.log(token);

  try {
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await findUserDB(verifiedToken.username);
    delete foundUser.password;

    req.user = foundUser;

    next();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Invalid credentials" });
  }
};

export default verifyToken;
