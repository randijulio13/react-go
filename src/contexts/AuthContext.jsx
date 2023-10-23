import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getJwtPayload, isJwtValid } from "../helper/helper";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  useEffect(() => {
    if (accessToken != "") {
      let payload = getJwtPayload(accessToken);
      setAuthData(payload);
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ authData, accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
