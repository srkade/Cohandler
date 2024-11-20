// src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-start pt-4 min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Number</label>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
            Login
          </button>
          <div className="flex justify-between items-center mt-4">
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
