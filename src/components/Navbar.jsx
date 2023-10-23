import React from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar = ({title}) => {
  const { authData } = useAuthContext();
  return (
    <div className="fixed z-10 w-screen bg-primary-800 h-20 flex items-center">
      <div className="w-64 flex items-center justify-center">
        <span className="text-white font-bold uppercase tracking-widest text-xl">
          App Name
        </span>
      </div>
      <div className="flex items-center justify-between w-[calc(100vw-16rem)] mr-4 px-4">
        <div>
          <h1 className="text-white font-bold uppercase tracking-widest">
            {title}
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <span className="text-white">
            Hello, <span className="font-bold">{authData?.name}</span>
          </span>
          <button className="rounded-full w-10 text-lg hover:scale-105 duration-200 active:scale-100 hover:shadow h-10 font-bold bg-white text-primary-900">
            R
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
