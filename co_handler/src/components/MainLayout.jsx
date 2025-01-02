// src/components/MainLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
