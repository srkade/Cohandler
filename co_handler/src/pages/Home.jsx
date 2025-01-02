// src/pages/Home.jsx
import React from "react";
import Amenities from "./Amenities";
import PhotoGallery from "./PhotoGallary";
const Home = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold">Welcome to A Co-Working Workspace</h2>
      <p className="mt-4 text-lg">
        Book workstations, cabins, and more on hourly, daily, or monthly basis
        with amenities provided.
      </p>
      
      <Amenities />
      <PhotoGallery/>
    </div>
  );
};

export default Home;
