import bcrypt from "bcrypt";

import {
  createUserDB,
  findUserDB,
  getUsersDB,
  getUserByIdDB,
} from "../domain/users.js";

import generateToken from "../utils/generateToken.js";
import sendDataResponse from "../utils/responses.js";

export const signup = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
    password
  );

  try {
    if (!fullName || !username || !password || !gender) {
      return sendDataResponse(res, 406, "Necessary fields required to fill in");
    }

    if (password !== confirmPassword) {
      return sendDataResponse(res, 400, "Passwords don't match");
    }

    if (password.length < 6 || !hasUppercase || !hasNumber || !hasSpecialChar) {
      return sendDataResponse(
        res,
        400,
        "Password must be at least 6 characters and include uppercase letters, numbers, and special characters"
      );
    }

    const existingUser = await findUserDB(username);
    if (existingUser) {
      return sendDataResponse(res, 400, "Username already exists!");
    }

    const maleProfileImage = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfileImage = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const profileImage =
      gender === "male" ? maleProfileImage : femaleProfileImage;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await createUserDB(
      fullName,
      username,
      hashedPassword,
      gender,
      profileImage
    );

    generateToken(username, res);

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await findUserDB(username);
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser?.password || ""
    );

    if (!existingUser || !isPasswordCorrect) {
      return sendDataResponse(res, 401, "Invalid username or password");
    }

    const token = generateToken(username, res);

    delete existingUser.password;

    res.json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const getUsers = async (req, res) => {
  const users = await getUsersDB();
  res.json({ users });
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await getUserByIdDB(userId);

    res.json({ user });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};
