import express from "express";
import createPost from "../controller/post.js";

import * as dotenv from "dotenv";

const router = express.Router();

router.get("/create", createPost);

export default router;
