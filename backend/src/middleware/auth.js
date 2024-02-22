import jwt from "jsonwebtoken";

import { findByIdDB, findUserDB } from "../domain/users.js";
import sendDataResponse from "../utils/responses.js";

const validateAuthentication = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;

    if (!token) {
      return sendDataResponse(res, 401, "Unauthorized: No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return sendDataResponse(res, 401, "Unauthorized: Invalid token");
    }

    const user = await findByIdDB(decoded.userId);
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

// export async function validateAuthentication(req, res, next) {
//     const header = req.header('authorization')

//     if (!header) {
//       return sendDataResponse(res, 401, {
//         authorization: 'Missing Authorization header'
//       })
//     }

//     const [type, token] = header.split(' ')

//     const isTypeValid = validateTokenType(type)
//     if (!isTypeValid) {
//       return sendDataResponse(res, 401, {
//         authentication: `Invalid token type, expected Bearer but got ${type}`
//       })
//     }

//     const isTokenValid = validateToken(token)
//     if (!isTokenValid) {
//       return sendDataResponse(res, 401, {
//         authentication: 'Invalid or missing access token'
//       })
//     }

//     const decodedToken = jwt.decode(token)
//     const foundUser = await User.findById(decodedToken.userId)
//     delete foundUser.passwordHash

//     req.user = foundUser

//     if (decodedToken.userRole === 'TEACHER') {
//       const foundTeacher = await Teacher.findByUserId(decodedToken.userId)
//       req.teacher = foundTeacher
//     }
//     if (decodedToken.userRole === 'STUDENT') {
//       const foundStudent = await Student.findByUserId(decodedToken.userId)
//       req.student = foundStudent
//     }

//     next()
//   }

//   function validateToken(token) {
//     if (!token) {
//       return false
//     }

//     return jwt.verify(token, JWT_SECRET, (error) => {
//       return !error
//     })
//   }

//   function validateTokenType(type) {
//     if (!type) {
//       return false
//     }

//     if (type.toUpperCase() !== 'BEARER') {
//       return false
//     }

//     return true
//   }
