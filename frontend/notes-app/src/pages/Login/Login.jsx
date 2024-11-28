import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/Helper"; // Ensure correct path for helper.js

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error message

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the email is valid
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;

      setError("");
    }

    // Check if both email and password are entered
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Mock login request (simulating async behavior)
    try {
      const response = await new Promise(
        (resolve) => setTimeout(() => resolve({ success: true }), 1000) // Mock API response
      );

      if (response.success) {
        console.log("Login successful!");
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h4 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h4>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Displaying the error message if any */}
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Not yet registered?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
