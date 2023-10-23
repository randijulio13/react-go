import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../pages/Login";
import Auth from "../middlewares/Auth";
import Guest from "../middlewares/Guest";
import UserManagement from "../pages/UserManagement";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>
        <Route element={<Guest />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
