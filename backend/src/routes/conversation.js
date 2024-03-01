import express from "express";
import { deleteConversation } from "../controller/messages.js";
import validateAuthentication from "../middleware/auth.js";

const router = express.Router();

router.delete("/delete/:id", validateAuthentication, deleteConversation);

export default router;
