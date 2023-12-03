import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkValidToken from "./hoc/checkValidToken";
import { getUser, logout } from "./service/userService";
import { saveUserToLocalStorage } from "./service/userService";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAndValidateToken = async () => {
      try {
        // Fetch user information
        const info = await getUser();
        if (info && info.data && info.data.user && info.data.user._json) {
          // Save user information to localStorage
          await saveUserToLocalStorage(info.data.user);
          setTimeout(() => {
            logout();
            validateTokenAndRedirect();
          }, 18000000);
          // Validate token and redirect only after fetching and saving user information
          await validateTokenAndRedirect();
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    const validateTokenAndRedirect = async () => {
      try {
        const isValid = await checkValidToken();
        // console.log("valid", isValid);
        // If not valid or not authenticated, redirect to /login
        if (!isValid) {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error validating token:", error);
      }
    };

    fetchDataAndValidateToken();
  }, [navigate]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default App;
