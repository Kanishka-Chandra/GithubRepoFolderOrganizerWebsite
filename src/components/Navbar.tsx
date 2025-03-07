import React from "react";
import { FolderTree } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Import the new toggle component

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm h-16 flex items-center justify-between px-6 shadow-sm z-50">
      <div className="flex items-center space-x-2">
        <FolderTree className="w-6 h-6 text-[#0366D6]" />
        <span className="font-semibold text-lg">GitFolders</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/login"
          className="text-gray-600 hover:text-[#0366D6] transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-[#0366D6] text-white px-4 py-2 rounded-lg hover:bg-[#024E9D] transition-colors"
        >
          Sign Up
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
