import express from "express";
import {
  deleteMessage,
  getMessage,
  sendMessage,
} from "../controller/messages.js";
import validateAuthentication from "../middleware/auth.js";

const router = express.Router();

router.post("/send/:id", validateAuthentication, sendMessage);
router.get("/:id", validateAuthentication, getMessage);
router.delete("/delete/:id", validateAuthentication, deleteMessage);

export default router;
