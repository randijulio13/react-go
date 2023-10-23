import axios from "axios";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const { accessToken, setAccessToken } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:3000/api/login", {
      nip,
      password,
    });

    setAccessToken(data.token);
    navigate("/");
  };

  const handleNipChange = (e) => {
    const value = e.target.value;
    // Menggunakan regular expression untuk memeriksa apakah nilai hanya mengandung angka
    if (/^[0-9]*$/.test(value)) {
      setNip(value);
    }
  };
  return (
    <div className="min-h-screen bg-primary-800 flex">
      <div className="w-3/5"></div>
      <form
        onSubmit={handleSubmit}
        className="w-2/5 bg-white rounded-l-2xl flex flex-col justify-center px-10 gap-2"
      >
        <h1 className="tracking-widest font-bold uppercase me-auto text-2xl my-4">
          Login
        </h1>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="nip">NIP</label>
          <input
            type="text"
            id="nip"
            value={nip}
            onChange={handleNipChange}
            className="px-4 py-2 rounded outline-primary-300 focus:outline-primary-800 outline-1 outline"
          />
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="px-4 py-2 rounded outline-primary-300 focus:outline-primary-800 outline-1 outline"
          />
        </div>
        <div className="mb-2">
          <button className="w-full rounded text-white uppercase font-bold tracking-wider bg-primary-700 px-4 py-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
