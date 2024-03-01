import express from "express";

import {
  signup,
  login,
  logout,
  getUsers,
  getUserById,
} from "../controller/users.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
