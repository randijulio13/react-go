import React, { useEffect, useState } from "react";
import { getJwtPayload, isJwtValid } from "../helper/helper";
import useLocalStorage from "../hooks/useLocalStorage";
import AuthLayout from "./AuthLayout";

export default function Home() {
return <AuthLayout title="Dashboard">Home</AuthLayout>
}
