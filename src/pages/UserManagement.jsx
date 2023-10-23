import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
// import axios from "axios";
import axios from "../lib/axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/api/user").then(({ data }) => {
      setUsers(data.data)
    });
  }, []);
  return <AuthLayout title="Manajemen Pengguna">
    <table>
      <thead>
        <tr>
          <th>no</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user,index)=>{
    return <tr key={index}><td>{index+1}</td><td>{user.name}</td></tr>
  })}
      </tbody>
    </table>
  </AuthLayout>;
};

export default UserManagement;
