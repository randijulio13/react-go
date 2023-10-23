import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const jwtToken = localStorage.getItem("accessItem");
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "Token": `${jwtToken}`,
    "Access-Control-Allow-Origin": "*",
  },
});
export default axiosInstance;
