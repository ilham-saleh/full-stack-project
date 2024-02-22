import express from "express";
import sendMessage from "../controller/messages.js";
import validateAuthentication from "../middleware/auth.js";

const router = express.Router();

router.post("/send/:id", validateAuthentication, sendMessage);

export default router;
