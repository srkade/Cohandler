import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    workspaceType: "",
    date: "",
    timeSlot: "",
    duration: "",
    numberOfPeople: "",
    amenities: [],
    seatingPreferences: "",
    specialRequests: "",
    plan: "",
    paymentMode: "",
    bookingNotes: "",
    userId: "",
    password: "",
    idProof: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idProof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API call or backend logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
          <label>Phone:</label>
          <input type="tel" name="phone" onChange={handleChange} required />
          <label>Company (optional):</label>
          <input type="text" name="company" onChange={handleChange} />
        </div>

        {/* Booking Details */}
        <div>
          <label>Workspace Type:</label>
          <select name="workspaceType" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Private Cabin">Private Cabin</option>
            <option value="Conference Room">Conference Room</option>
            <option value="Open Seating">Open Seating</option>
          </select>
          <label>Date:</label>
          <input type="date" name="date" onChange={handleChange} required />
          <label>Time Slot:</label>
          <input type="time" name="timeSlot" onChange={handleChange} required />
          <label>Duration (in hours):</label>
          <input type="number" name="duration" onChange={handleChange} required />
          <label>Number of People:</label>
          <input type="number" name="numberOfPeople" onChange={handleChange} required />
        </div>

        {/* Requirements */}
        <div>
          <label>Amenities:</label>
          <textarea name="amenities" onChange={handleChange}></textarea>
          <label>Seating Preferences:</label>
          <input type="text" name="seatingPreferences" onChange={handleChange} />
          <label>Special Requests:</label>
          <textarea name="specialRequests" onChange={handleChange}></textarea>
        </div>

        {/* Payment Info */}
        <div>
          <label>Plan:</label>
          <select name="plan" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
          </select>
          <label>Payment Mode:</label>
          <input type="text" name="paymentMode" onChange={handleChange} required />
        </div>

        {/* Login Details */}
        <div>
          <label>Email/User ID:</label>
          <input type="email" name="userId" onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        {/* Verification */}
        <div>
          <label>Upload ID Proof:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
