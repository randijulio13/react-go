import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAuthContext } from "../contexts/AuthContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { authData, setAccessToken } = useAuthContext();
  const handleLogout = (e) => {
    e.preventDefault();
    setAccessToken("");
  };

  const menus = {
    user_management: { label: "Manajemen Pengguna", link: "/user-management" },
  };

  return (
    <div className="fixed w-64 h-screen z-50">
      <div className="mt-20 flex flex-col gap-4 px-4">
        <NavLink to={"/"} className="sidebar-item">Dashboard</NavLink>
        {authData?.permissions?.map((permission,index)=>{
          if(menus[permission]){
            return <NavLink key={index} className="sidebar-item" to={menus[permission].link}>{menus[permission].label}</NavLink>
          }
        })}
        <button onClick={handleLogout} className="sidebar-item">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
