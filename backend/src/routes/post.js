import express from "express";
import createPost from "../controller/post.js";

import * as dotenv from "dotenv";
import OpenAI from "openai";

// import OpenAI from "openai";

const router = express.Router();

// // Create an instance of the OpenAI class with your API key
// const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

router.get("/create", createPost);

export default router;
