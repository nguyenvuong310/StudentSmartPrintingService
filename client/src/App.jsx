import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { saveUserToLocalStorage } from "./service/userService";
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default App;