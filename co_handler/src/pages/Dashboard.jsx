// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Firestore instance

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
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

  return (
    <div className="flex">
      <aside className="bg-purple-100 w-1/4 p-4">
        <ul className="space-y-4">
          <li className="text-green-600 font-bold">Profile Information</li>
          <li>Booking Option</li>
          <li>Booking History</li>
          <li>Billing & Invoices</li>
          <li>Support Section</li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 bg-blue-100 p-6">
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
      </main>
    </div>
  );
};

export default Dashboard;
