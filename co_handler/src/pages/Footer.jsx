import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:flex justify-between">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">Collab Workspace</h2>
          <p className="mt-2">Empowering Creativity & Productivity.</p>
        </div>

        {/* Quick Links */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-purple-400">Facebook</a>
            <a href="https://instagram.com" className="hover:text-purple-400">Instagram</a>
            <a href="https://linkedin.com" className="hover:text-purple-400">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Collab Workspace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
