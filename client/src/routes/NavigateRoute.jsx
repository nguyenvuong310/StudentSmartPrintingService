import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  getUserInfo,
  saveRoleToLocalStorage,
  logout,
} from "../service/userService";
import { path } from "../utils/constant";
const NavigateRoute = () => {
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
          console.log("User Data:", userData.data);
          setRole(userData.data.user.role);
          saveRoleToLocalStorage(userData.data.user.role);
        }
      } catch (error) {
        // Handle error, e.g., redirect to an error page
        console.error("Error fetching user data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [role]);

  if (isLoading) {
    return;
  }
  console.log("load", isLoading);
  if (role === null) {
    logout();
    return <Navigate to={path.HOMEPAGE} replace />;
  }
  return role === "STUDENT" ? (
    <Navigate to={path.HOMEPAGESTUDENT} replace />
  ) : (
    <Navigate to={path.HOMEPAGEADMIN} replace />
  );
};

export default NavigateRoute;
