import { Link } from "react-router-dom";

const SignUpForm = ({ userData, error, handleInputChange, handleSignUp }) => {
  return (
    <div className="h-screen flex flex-col sm:flex-row w-full">
      <div className="hidden sm:flex w-full sm:w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Discover Today
          </h1>
          <p className="text-white mt-1">
            The most amazing things are waiting for you!
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="flex w-full sm:w-1/2 justify-center items-center bg-white">
        {error && (
          <div className="error-message absolute top-0 left-0 right-0 bg-red-500 text-white p-2 text-center">
            {/* Display error message with animation */}
            <div className="animate-fadeInOut">{error}</div>
          </div>
        )}
        <form onSubmit={handleSignUp} className="bg-white w-full max-w-md p-8">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Sign Up Now!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Create your account
          </p>
          <div className="mb-4 flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              type="text"
              id="email"
              name="email"
              value={userData.email}
              className="w-full pl-2 outline-none border-none"
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a3 3 0 100 6 3 3 0 000-6zM9 1a1 1 0 11.001 2.001A1 1 0 019 1zM4 14c0 1.1.9 2 2 2h8a2 2 0 002-2v-1a5.978 5.978 0 00-3-5.192V7a3 3 0 00-6 0v.808A5.978 5.978 0 004 12v1zm11 5H5a5.978 5.978 0 002.992-1H12a5.978 5.978 0 002.992 1z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              className="w-full pl-2 outline-none border-none"
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-4 flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              className="w-full pl-2 outline-none border-none"
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-4 flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              className="w-full pl-2 outline-none border-none"
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="mb-4 flex items-center border-2 py-2 px-3 rounded-2xl">
            <select
              id="gender"
              name="gender"
              value={userData.gender}
              className="w-full pl-2 outline-none border-none"
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button
            type="submit"
            className="block w-full bg-black mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Sign Up
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <span>Already have an account?</span>{" "}
            <Link to="/login">Log in</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
