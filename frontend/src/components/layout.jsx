import { useState } from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar/Menu */}
      <div
        className={`bg-gray-800 text-white w-16 md:w-64 min-h-screen p-4 transition-all transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex md:flex-col md:justify-between md:w-16`}
      >
        <div className="md:flex md:flex-col md:items-center">
          <Link to="/" className="text-2xl font-bold mb-4">
            Logo
          </Link>

          <Link to="/" className="mb-2">
            Home
          </Link>
          <Link to="/messages" className="mb-2">
            Messages
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden mt-4 px-2 py-1 bg-gray-600 text-white rounded"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="flex-1 p-4">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>

        {/* Routes */}
      </div>
    </div>
  );
};

export default Layout;
