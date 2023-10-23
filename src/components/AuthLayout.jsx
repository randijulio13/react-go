import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AuthLayout = ({ children, title }) => {
  
  return (
    <div className="bg-primary-800 min-h-screen">
      <Sidebar />
      <Navbar title={title} />
      <div className="pl-64 pt-20 pb-4 pr-4">
        <div className="bg-white rounded p-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
