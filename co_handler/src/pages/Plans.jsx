// src/pages/Plans.jsx
import React from "react";

const Plans = () => {
  const plans = [
    {
      title: "Hourly Pass",
      price: " ₹200/ hr /Desk",
      description:
        "Perfect for short visits. Access to shared workspaces, internet, and amenities for an hour.",
    },
    {
      title: "Day Pass",
      price: "₹500 / day /Desk",
      description:
        "Ideal for day-long work. Includes access to shared workspaces, internet, and all amenities.",
    },
    {
      title: "Monthly Membership",
      price: "₹5000 / month / Desk",
      description:
        "Best for regular users. Access to dedicated workspaces, conference rooms, internet, and all amenities.",
    },
  ];
  const plans2 = [
    {
      title: "Hourly Pass",
      price: " ₹700 / hr ",
      description:
        "Perfect for short visits. Access to shared workspaces, internet, and amenities for an hour.",
    },
    {
      title: "Day Pass",
      price: "₹2000 / day ",
      description:
        "Ideal for day-long work. Includes access to shared workspaces, internet, and all amenities.",
    },
    {
      title: "Monthly Membership",
      price: "₹21000 / month ",
      description:
        "Best for regular users. Access to dedicated workspaces, conference rooms, internet, and all amenities.",
    },
  ];

  return (
   <div>
     <div className=" bg-blue-100">
      <h2 className="text-4xl font-bold text-center mb-10">Our Plans for Open Workspace </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-xl text-green-600 font-semibold mb-4">
              {plan.price}
            </p>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className=" pt-5 bg-blue-100">
      <h2 className="text-4xl font-bold text-center mb-10">Our Plans for Private cabin </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans2.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-xl text-green-600 font-semibold mb-4">
              {plan.price}
            </p>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Plans;
