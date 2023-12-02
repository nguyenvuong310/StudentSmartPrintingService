import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getRoleFromLocalStorage } from "../service/userService";

const AuthenStudent = () => {
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRole = await getRoleFromLocalStorage();
        setRole(userRole);
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
  // Check if the user has the "STUDENT" role
  if (role === "STUDENT") {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthenStudent;
