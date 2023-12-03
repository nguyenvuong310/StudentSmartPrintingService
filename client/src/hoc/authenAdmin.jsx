import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../service/userService";

const AuthenAdmin = () => {
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserInfo();
        if (
          userData &&
          userData.data &&
          userData.data.user &&
          userData.data.user.role
        ) {
          // console.log("User Data:", userData.data);
          setRole(userData.data.user.role);
          saveRoleToLocalStorage(userData.data.user.role);
        }
      } catch (error) {
        console.error("Error fetching user role", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return null;
  }
  // Check if the user has the "ADMIN" role
  if (role === "ADMIN") {
    return (
      <>
        {/* <main> */}
        <Outlet />
        {/* </main> */}
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthenAdmin;
