import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAuthContext } from "../contexts/AuthContext";

export default function Guest() {
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      return navigate("/");
    }
  }, [accessToken]);
  return <Outlet />;
}
