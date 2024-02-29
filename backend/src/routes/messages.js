import express from "express";
import { getMessage, sendMessage } from "../controller/messages.js";
import validateAuthentication from "../middleware/auth.js";

const router = express.Router();

router.post("/send/:id", validateAuthentication, sendMessage);
router.get("/:id", validateAuthentication, getMessage);

export default router;
