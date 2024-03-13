import express from "express";
import {
  deleteMessage,
  getMessage,
  sendMessage,
} from "../controller/messages.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.post("/send/:id", verifyToken, sendMessage);
router.get("/:id", verifyToken, getMessage);
router.delete("/delete/:id", verifyToken, deleteMessage);

export default router;
