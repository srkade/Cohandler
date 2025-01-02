// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-semibold">Collab Workspace</span>, where co-working reaches new heights! Since our establishment in 2019, we’ve been on a mission to revolutionize the co-working industry by delivering unmatched services to our esteemed clients. We understand the unique needs and challenges faced by mid to small-scale companies, and that’s why we’ve curated a suite of solutions specifically tailored to address those pain points with precision.
          </p>
          <p className="text-lg text-gray-700">
            But at <span className="font-semibold">Collab Workspace</span>, we don’t stop at exceptional services – we go above and beyond to create an inspiring and invigorating environment that sparks creativity and fuels productivity. Our meticulously designed workspace is more than just four walls; it’s a dynamic haven that empowers employees to flourish and achieve remarkable results.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/images/hero1.jpg" // Replace this with the path to your image
            alt="Workspace"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
