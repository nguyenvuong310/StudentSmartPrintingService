import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManagePrinterPage from "./pages/admin/ManagePrinterPage";
import HomePageStudent from "./pages/student/homepageST.jsx";
import HomePageAdmin from "./pages/admin/homepageAd.jsx";
import ManageStudentPage from "./pages/admin/ManageStudentPage.jsx";
import "./index.css";
import { path } from "../src/utils/constant.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import AuthenAdmin from "./hoc/authenAdmin.jsx";
import AuthenStudent from "./hoc/authenStudent.jsx";
import ManagePrintingHistory from "./pages/admin/ManagePrintingHistory.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={path.LOGIN} element={<LoginPage />} />
      {/* <Route path="/login-success" element={<NavigateRoute />} /> */}
      <Route path="/" element={<App />}>
        <Route index={true} path="/home" element={<HomePage />} />
        <Route path="/student" element={<AuthenStudent />}>
          <Route index={true} element={<HomePageStudent />} />
        </Route>
        <Route path="/admin" element={<AuthenAdmin />}>
          {/* <Route index={true}path="/admin/student-manage" element={<HomePageAdmin />} /> */}
          <Route index={true} element={<ManageStudentPage />} />
          <Route path="/admin/printer-manage" element={<ManagePrinterPage />} />
          <Route
            path="/admin/printing-history-manage"
            element={<ManagePrintingHistory />}
          />
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
