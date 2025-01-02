// src/pages/Amenities.jsx
import React from "react";
import {
  OfficeBuildingIcon,
  WifiIcon,
  LightningBoltIcon,
  SparklesIcon,
  CameraIcon,
  PrinterIcon,
} from "@heroicons/react/outline";

const amenitiesData = [
  {
    icon: <OfficeBuildingIcon className="h-8 w-8 text-purple-500" />,
    title: "Modern & Ergonomic Furniture",
    description: "Experience seamless and stylish work environments.",
  },
  {
    icon: <WifiIcon className="h-8 w-8 text-blue-500" />,
    title: "High-Speed Internet",
    description: "Empowering seamless connectivity in this dynamic workspace.",
  },
  {
    icon: <LightningBoltIcon className="h-8 w-8 text-yellow-500" />,
    title: "24x7 Power Backup",
    description: "Reliable and constant power for uninterrupted productivity.",
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-green-500" />,
    title: "Hygiene & Cleanliness",
    description: "Pristine and sanitized environment for your well-being.",
  },
  {
    icon: <CameraIcon className="h-8 w-8 text-gray-500" />,
    title: "CCTV Surveillance",
    description: "Ensuring a secure and focused working space.",
  },
  {
    icon: <PrinterIcon className="h-8 w-8 text-red-500" />,
    title: "Printer",
    description: "For all your printing needs.",
  },
];

const Amenities = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Amenities</h2>
      <p className="text-center text-gray-600 mb-10">
        A Place That Helps Growth of Your Work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-20">
        {amenitiesData.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 border p-6 rounded-lg shadow-lg"
          >
            {amenity.icon}
            <h3 className="text-xl font-semibold">{amenity.title}</h3>
            <p className="text-gray-500">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
