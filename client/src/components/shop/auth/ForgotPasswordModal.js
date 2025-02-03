import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( "https://sanjeevani-7q5r.onrender.com/api/send-reset-link", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending reset link.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl mb-4">Reset Password</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email address to receive a password reset link.
        </p>
        {/* Ensure this form is not nested inside another form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full px-4 py-2 border mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button" // Change to type="button" to avoid form submission
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
