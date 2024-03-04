import { Link } from "react-router-dom";

const SignUpForm = ({ userData, handleInputChange, handleSignUp }) => {
  return (
    <div className="h-screen flex flex-col sm:flex-row w-full">
      <div className="hidden sm:flex w-full sm:w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Discover Today
          </h1>
          <p className="text-white mt-1">
            The most popular peer-to-peer lending at SEA
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
        <form onSubmit={handleSignUp} className="bg-white w-full max-w-md p-8">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Sign Up Now!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Create your account
          </p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userData.fullName}
              className="w-full border border-gray-300 p-2 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              className="w-full border border-gray-300 p-2 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              className="w-full border border-gray-300 p-2 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              className="w-full border border-gray-300 p-2 rounded"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={userData.gender}
              className="w-full border border-gray-300 p-2 rounded"
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
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
