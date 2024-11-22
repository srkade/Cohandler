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
    numberOfPeople: 1,
    amenities: [],
    seatingPreferences: "",
    specialRequests: "",
    plan: "",
    paymentMode: "",
    bookingNotes: "",
    governmentIdProof: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      const updatedAmenities = [...formData.amenities];
      if (updatedAmenities.includes(value)) {
        const index = updatedAmenities.indexOf(value);
        updatedAmenities.splice(index, 1);
      } else {
        updatedAmenities.push(value);
      }
      setFormData({ ...formData, amenities: updatedAmenities });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Booking Submitted!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <h3 className="text-lg font-semibold mb-2">Personal Info</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Booking Details */}
        <h3 className="text-lg font-semibold mb-2">Booking Details</h3>
        <select
          name="workspaceType"
          value={formData.workspaceType}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        >
          <option value="">Select Workspace Type</option>
          <option value="private-cabin">Private Cabin</option>
          <option value="open-desk">Open Desk</option>
          <option value="conference-room">Conference Room</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="time"
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (in hours)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="numberOfPeople"
          placeholder="Number of People"
          value={formData.numberOfPeople}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Requirements */}
        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
        <div className="mb-3">
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="WiFi"
              checked={formData.amenities.includes("WiFi")}
              onChange={handleChange}
              className="mr-2"
            />
            WiFi
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="amenities"
              value="Projector"
              checked={formData.amenities.includes("Projector")}
              onChange={handleChange}
              className="mr-2"
            />
            Projector
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="amenities"
              value="Printer"
              checked={formData.amenities.includes("Printer")}
              onChange={handleChange}
              className="mr-2"
            />
            Printer
          </label>
        </div>
        <input
          type="text"
          name="seatingPreferences"
          placeholder="Seating Preferences"
          value={formData.seatingPreferences}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="specialRequests"
          placeholder="Special Requests"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        ></textarea>

        {/* Payment Info */}
        <h3 className="text-lg font-semibold mb-2">Payment Info</h3>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        >
          <option value="">Select Plan</option>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
        <select
          name="paymentMode"
          value={formData.paymentMode}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        >
          <option value="">Select Payment Mode</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="net-banking">Net Banking</option>
        </select>
        <textarea
          name="bookingNotes"
          placeholder="Booking Notes"
          value={formData.bookingNotes}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        ></textarea>

        {/* Verification */}
        <h3 className="text-lg font-semibold mb-2">Verification</h3>
        <input
          type="file"
          name="governmentIdProof"
          accept=".png, .jpg, .jpeg, .pdf"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
