import React from "react";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold">Welcome to A Co-Working Workspace</h2>
      <p className="mt-4 text-lg">
        Book workstations, cabins, and more on hourly, daily, or monthly basis
        with amenities provided.
      </p>

      {/* Day Pass Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Day Pass</h3>
        <p>Book your workspace for today (21 Nov).</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>

      {/* Workspaces Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Workspaces</h3>
        <p>View available workspaces in Mumbai.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Workspaces
        </button>
      </div>

      {/* Product Options Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Product Options</h3>
        <ul>
          <li>Day Pass</li>
          <li>Meeting Room</li>
          <li>Coworking Space</li>
          <li>Managed Office</li>
          <li>Virtual Office</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
