import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
// import axios from "axios";
import axios from "../lib/axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/api/user").then(({ data }) => {
      console.log({ data });
    });
  }, []);
  return <AuthLayout title="Manajemen Pengguna">UserManagement</AuthLayout>;
};

export default UserManagement;
