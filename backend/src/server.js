// //Include the express library
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

import { app, server } from "../socket/socket.js";

const __dirname = path.resolve();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());
app.use(cookieParser());

// Deployment
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
const port = process.env.PORT || 8000;

import userRouter from "./routes/users.js";
app.use("/user", userRouter);

import messageRouter from "./routes/messages.js";
app.use("/message", messageRouter);

import converstionRouter from "./routes/conversation.js";
app.use("/conversation", converstionRouter);

import postRouter from "./routes/post.js";
app.use("/post", postRouter);

import DalleRouter from "./routes/dalle.js";
app.use("/dalle", DalleRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
