import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Auth from "./middlewares/Auth";
import Guest from "./middlewares/Guest";
import ContextProvider from "./contexts/ContextProvider";
import Routers from "./routers/Routers";

export default function App() {
  return (
    <ContextProvider>
      <Routers />
    </ContextProvider>
  );
}
