import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const CreatePost = () => {
  return (
    <>
      {/* <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf3]">
        <img src={logo} alt="App Logo" className="w-28 object-contain" />

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header> */}

      <main className="bg-[#f9fafe] sm:p-8 px-4 py-8 w-full min-h-[100vh]">
        Create Post
      </main>
    </>
  );
};

export default CreatePost;
