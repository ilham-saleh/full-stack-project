import jwt from "jsonwebtoken";

const generateToken = (username, res) => {
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // res.cookie("jwt", token, {
  //   maxAge: 7 * 24 * 60 * 60 * 1000,
  //   httpOnly: true,
  //   sameSite: "strict",
  //   secure: process.env.NODE_ENV !== "Development",
  // });

  return token;
};

export default generateToken;
