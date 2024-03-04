// SignUpPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/signup";

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      const newUserData = {
        ...prevUserData,
        [name]: value,
      };

      console.log(newUserData);
      // Return the new object as the updated state
      return newUserData;
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        "http://localhost:3030/user/signup",
        options
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate("/login");
      } else {
        const result = await response.json();
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignUpForm
        userData={userData}
        handleInputChange={handleInputChange}
        handleSignUp={handleSignUp}
      />
    </div>
  );
};

export default SignUpPage;
