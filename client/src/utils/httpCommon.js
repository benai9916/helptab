import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: 'https://full-stack-helptap.vercel.app' || "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});