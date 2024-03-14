import express from "express";
import createImage from "../controller/dalle.js";

const router = express.Router();

// import * as dotenv from "dotenv";

router.get("/", (req, res) => {
  res.json("DALL-E");
});

router.post("/generate", createImage);

export default router;
