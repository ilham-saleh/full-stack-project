import express from "express";

import { signup, login, logout, getUsers } from "../controller/users.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/", getUsers);

export default router;
