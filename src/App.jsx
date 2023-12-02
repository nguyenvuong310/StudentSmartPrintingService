import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkValidToken from "./hoc/checkValidToken";
import { getUser } from "./service/userService";
import { saveUserToLocalStorage } from "./service/userService";
const App = () => {
  const [userInfor, setUserInfor] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAndValidateToken = async () => {
      try {
        // Fetch user information
        const info = await getUser();

        if (info && info.data && info.data.user && info.data.user._json) {
          setUserInfor(info.data.user._json);

          // Save user information to localStorage
          await saveUserToLocalStorage(info.data.user);
          setTimeout(() => {
            clearUserFromLocalStorage();
            validateTokenAndRedirect();
          }, 60000);
          // Validate token and redirect only after fetching and saving user information
          await validateTokenAndRedirect();
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };
    const clearUserFromLocalStorage = () => {
      // Clear user information from localStorage
      localStorage.removeItem("user");
    };

    const validateTokenAndRedirect = async () => {
      try {
        const isValid = await checkValidToken();

        // If not valid or not authenticated, redirect to /login
        if (!isValid) {
          navigate("/login");
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
