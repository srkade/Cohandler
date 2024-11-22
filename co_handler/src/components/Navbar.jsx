// src/components/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useAuth(); // Access the logged-in user
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white font-bold text-xl">Collab Workspace</h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => navigate("/")} className="text-white">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/about")} className="text-white">
              About
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/plans")} className="text-white">
              Plans
            </button>
          </li>
          {user ? (
            <div className="relative">
              {/* User Profile Icon */}
              <img
                src=""
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => navigate("/dashboard")}
              />
              {/* Dropdown for Logout */}
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded hidden group-hover:block">
                <button
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="text-white"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/register")}
                  className="text-white"
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
