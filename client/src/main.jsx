import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx"
import HomePageUser from "./pages/HomePageUser.jsx"
import HomePageAdmin from "./pages/HomePageAdmin.jsx"
import FindHospital from "./pages/FindHospital.jsx"
import "./index.css";
import { path } from "../src/utils/constant.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={path.LOGIN} element={<LoginPage />} />

      <Route path="/" element={<App />}>
        <Route index={true} element={<HomePage />} />
        <Route path="/user" >
          <Route index={true} element={<HomePageUser />}></Route>
          <Route path="/user/findHospital" element={<FindHospital />} />
        </Route>
        <Route path="/admin" element={<HomePageAdmin />}>
        </Route>
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);