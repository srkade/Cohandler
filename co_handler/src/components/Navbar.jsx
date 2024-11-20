// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Co-Working Workspace</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About Us
        </Link>
        <Link to="/plans" className="hover:text-gray-200">
          Plans
        </Link>
        <Link to="/register" className="hover:text-gray-200">
          Register
        </Link>
        <Link to="/login" className="hover:text-gray-200">
          Login
        </Link>

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Request Ride
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
