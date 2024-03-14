// LoginPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/login";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const URL = "http://localhost:3030";

const loginLocalStorage = () => {
  const storedUser = localStorage.getItem("user");
  try {
    return storedUser ? JSON.parse(storedUser) : { username: "", password: "" };
  } catch (error) {
    console.log("Error in login Localstorage", error);
    return {
      username: "",
      password: "",
    };
  }
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState(loginLocalStorage());

  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevUserData) => {
      const newUserData = {
        ...prevUserData,
        [name]: value,
      };

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
    const response = await fetch(`${URL}/user/login`, option);
    const result = await response.json();
    if (response.ok) {
      console.log(result.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("token", result.token);
      setAuthUser(result.data);
      navigate("/");
    } else {
      toast(result.error);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(loginData));
  // }, [loginData]);

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
