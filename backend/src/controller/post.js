import { createPostDB, getPostsDB } from "../domain/post.js";

import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostsDB();
    res.json({ data: posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { name, prompt, image } = req.body;

    const imageUrl = await cloudinary.uploader.upload(image);

    const newPost = await createPostDB(name, prompt, imageUrl.url);

    res.json({ data: newPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
