import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: 'https://helptab.vercel.app' || "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});