import axios from "axios";
import { BASE_URL } from "./constants";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default headers
  },
});

// Interceptors for requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to headers if available
    const accessToken = localStorage.getItem("token"); // Adjust this to your token storage mechanism
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
