import { Link } from "react-router-dom";
import { useState } from "react";
import useLogout from "../hooks/useLogout";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { logout } = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:grid md:grid-cols-2">
      <div className="md:col-span-1 md:w-200 md:overflow-x-hidden">
        <div className="flex justify-between md:hidden">
          <h1 className="text-2xl font-bold">Home</h1>
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block transition-all duration-300`}
        >
          <Link
            to="/messages"
            className="block px-4 py-2 hover:bg-gray-200 md:px-8"
          >
            Messages
          </Link>
          <Link
            to="/community"
            className="block px-4 py-2 hover:bg-gray-200 md:px-8"
          >
            Community
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-200 md:px-8"
          >
            Profile
          </Link>
          <Link
            to="/home"
            className="block px-4 py-2 hover:bg-gray-200 md:px-8"
          >
            Home
          </Link>
          <button
            onClick={logout}
            className="block px-4 py-2 hover:bg-gray-200 md:px-8"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="md:col-span-1 md:flex-1">
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold">Home</h1>
          <Link to="/messages">Messages</Link>
          <button onClick={logout}>Logout</button>
        </div>
        <div className="p-4">{/* Your main content goes here */}</div>
      </div>
    </div>
  );
};

export default Home;

// import { Link, useNavigate } from "react-router-dom";
// import useLogout from "../hooks/useLogout";
// import { FaBars } from "react-icons/fa";

// const Home = () => {
//   const { logout } = useLogout();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row md:grid md:grid-cols-2">
//       <div className="md:col-span-1 md:w-100 md:h-screen md:overflow-x-hidden bg-indigo-600 text-white">
//         <div className="flex justify-between">
//           <button
//             className="p-2 rounded-md focus:outline-none focus:ring-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <FaBars className="h-6 w-6" />
//           </button>
//         </div>
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } md:block transition-all duration-300 z-999`}
//         >
//           <div className="grid grid-rows-6">
//             <Link
//               to="/messages"
//               className="row-span-1 block px-4 py-2 hover:bg-indigo-700 md:px-8"
//             >
//               Messages
//             </Link>
//             <Link
//               to="/community"
//               className="row-span-1 block px-4 py-2 hover:bg-indigo-700 md:px-8"
//             >
//               Community
//             </Link>
//             <Link
//               to="/profile"
//               className="row-span-1 block px-4 py-2 hover:bg-indigo-700 md:px-8"
//             >
//               Profile
//             </Link>
//             <Link
//               to="/home"
//               className="row-span-1 block px-4 py-2 hover:bg-indigo-700 md:px-8"
//             >
//               Home
//             </Link>
//             <div className="row-span-4"></div>
//             <button
//               onClick={logout}
//               className="row-span-1 block px-4 py-2 hover:bg-indigo-700 md:px-8"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="md:col-span-1 md:flex-1">
//         <div className="hidden md:block">
//           <h1 className="text-2xl font-bold">Home</h1>
//           <Link to="/messages">Messages</Link>
//           <button onClick={logout}>Logout</button>
//         </div>
//         <div className="p-4">
//           {/* Your main content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
