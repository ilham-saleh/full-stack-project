import bcrypt from "bcrypt";

import { createUserDB, findUserDB } from "../domain/users.js";

import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  try {
    if (!fullName || !username || !password || !gender) {
      return res
        .status(406)
        .json({ error: "Necessary fields required to fill in" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const existingUser = await findUserDB(username);
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists!" });
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

    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  res.json({
    message: "LOGIN CONTROLLER",
  });
};

export const logout = async (req, res) => {
  res.json({
    message: "LOGOUT CONTROLLER",
  });
};
