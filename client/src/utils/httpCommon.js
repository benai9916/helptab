import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000' || 'https://helptab.vercel.app' || "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});