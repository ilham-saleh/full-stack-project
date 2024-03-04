// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevUserData) => {
      const newUserData = {
        ...prevUserData,
        [name]: value,
      };

      console.log(newUserData);
      // Return the new object as the updated state
      return newUserData;
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    const response = await fetch("http://localhost:3030/user/login", option);
    const result = await response.json();
    if (response.ok) {
      console.log(result);
      // setError(null);
      // localStorage.setItem("userToken", result.token);
      // localStorage.setItem("username", result.data.username);
      navigate("/");
    } else {
      // const result = await response.json();
      // setError(result.error);
      console.log(result.error);
      console.log("error hapened");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <LoginForm
        loginData={loginData}
        handleLogin={handleLogin}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default LoginPage;
