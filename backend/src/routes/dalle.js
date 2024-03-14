import express from "express";

const router = express.Router();

import * as dotenv from "dotenv";
import OpenAI from "openai";

// Create an instance of the OpenAI class with your API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.get("/", (req, res) => {
  res.json("DALL-E");
});

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    res.json({ data: image.data[0].url });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
