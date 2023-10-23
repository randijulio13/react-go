import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import AuthLayout from "../components/AuthLayout";
import { useAuthContext } from "../contexts/AuthContext";

export default function Auth() {
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);
  return <Outlet />;
}
