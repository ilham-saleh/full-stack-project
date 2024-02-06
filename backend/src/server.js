// //Include the express library
import express from "express";
import morgan from "morgan";
import cors from "cors";

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
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json("If you see this message server is working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
