// SignUpPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/signup";

const signupLocalStorage = () => {
  const storedUser = localStorage.getItem("userSignUp");
  try {
    return storedUser
      ? JSON.parse(storedUser)
      : {
          email: "",
          username: "",
          pasword: "",
          confirmPassword: "",
          gender: "",
        };
  } catch (error) {
    console.error("Error parsing stored user:", error);
    return {
      email: "",
      username: "",
      pasword: "",
      confirmPassword: "",
      gender: "",
    };
  }
};

const SignUpPage = () => {
  const [userData, setUserData] = useState(signupLocalStorage());
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      const newUserData = {
        ...prevUserData,
        [name]: value,
      };

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
      const result = await response.json();
      if (response.ok) {
        console.log(result);
        localStorage.removeItem("userSignUp");
        navigate("/login");
      } else {
        setError(result.error);
        console.log(error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("userSignUp", JSON.stringify(userData));
  }, [userData]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignUpForm
        userData={userData}
        error={error}
        handleInputChange={handleInputChange}
        handleSignUp={handleSignUp}
      />
    </div>
  );
};

export default SignUpPage;