// //Include the express library
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

// //Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 8000;

import userRouter from "./routes/users.js";
app.use("/users", userRouter);

import messageRouter from "./routes/messages.js";
app.use("/messages", messageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
