// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Firestore instance

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("profile"); // State to track active section
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid); // Assuming "users" is the collection name
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login"); // Redirect to login if no user
      }
    };

    fetchData();
  }, [auth, navigate]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to login on logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Profile Information
            </h2>
            {userData ? (
              <div>
                <p>
                  <strong>Name:</strong> {userData.name}
                </p>
                <p>
                  <strong>Contact Number:</strong> {userData.number}
                </p>
                <p>
                  <strong>Workspace Booking Details:</strong>{" "}
                  {userData.bookings || "No bookings yet"}
                </p>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        );

        case "bookingOptions":
          return (
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">Booking Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Booking Option Card */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/images/hero1.jpg" // Replace with the actual image path in your public folder
                    alt="Private Workspace"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Private Workspace</h3>
                    <p className="text-gray-600 mt-2">
                      A private and quiet space for focused work.
                    </p>
                    <button
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      onClick={() => handleBooking("Private Workspace")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
        
                {/* Example 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/images/hero2.jpg"
                    alt="Shared Workspace"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Shared Workspace</h3>
                    <p className="text-gray-600 mt-2">
                      A collaborative space shared with others.
                    </p>
                    <button
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      onClick={() => handleBooking("Shared Workspace")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/images/hero3.jpg"
                    alt="Shared Workspace"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Shared Workspace</h3>
                    <p className="text-gray-600 mt-2">
                      A collaborative space shared with others.
                    </p>
                    <button
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      onClick={() => handleBooking("Shared Workspace")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/images/hero4.jpg"
                    alt="Shared Workspace"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Shared Workspace</h3>
                    <p className="text-gray-600 mt-2">
                      A collaborative space shared with others.
                    </p>
                    <button
                      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      onClick={() => handleBooking("Shared Workspace")}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
        
                {/* Add more booking options as needed */}
              </div>
            </div>
          );
        

      case "bookingHistory":
        return (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Booking History
            </h2>
            <p>Your past bookings will appear here.</p>
          </div>
        );

      case "billingInvoices":
        return (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Billing & Invoices
            </h2>
            <p>Here you can view your billing and invoices.</p>
          </div>
        );

      case "support":
        return (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Support Section
            </h2>
            <p>If you have any issues, feel free to reach out to us.</p>
          </div>
        );

      default:
        return <p>Invalid section</p>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-purple-100 w-1/4 p-4">
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              activeSection === "profile" ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => setActiveSection("profile")}
          >
            Profile Information
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "bookingOptions" ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => setActiveSection("bookingOptions")}
          >
            Booking Option
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "bookingHistory" ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => setActiveSection("bookingHistory")}
          >
            Booking History
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "billingInvoices" ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => setActiveSection("billingInvoices")}
          >
            Billing & Invoices
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "support" ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => setActiveSection("support")}
          >
            Support Section
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-blue-100 p-6">{renderActiveSection()}</main>
    </div>
  );
};

export default Dashboard;
