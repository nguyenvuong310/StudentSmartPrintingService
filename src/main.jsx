import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CustomerRoute from "./components/CustomerRoute";
import AdminRoute from "./components/AdminRoute";
import HomePage from "./pages/HomePage";
import InstructionPage from "./pages/InstructionPage";
import LoginPage from "./pages/LoginPage";
import PrintingPage from "./pages/student/PrintingPage.jsx";
import HistoryPage from "./pages/HistoryPage";
import FeedbackPage from "./pages/FeedbackPage";
import ManagePrinterPage from "./pages/admin/ManagePrinterPage";
import ManagePrintingPage from "./pages/admin/ManagePrintingPage";
import CustomerServicePage from "./pages/admin/CustomerServicePage";
import HomePageStudent from "./pages/student/homepageST.jsx";
import HomePageAdmin from "./pages/admin/homepageAd.jsx";
import { Counter } from "./pages/Counter.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { path } from "../src/utils/constant.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import AuthenAdmin from "./hoc/authenAdmin.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/home" element={<HomePage />} />
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/printing" element={<PrintingPage />} />
        <Route path="" element={<CustomerRoute />}>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
        <Route path="" element={<AdminRoute />}>
          <Route path="/admin/printer-manage" element={<ManagePrinterPage />} />
          <Route
            path="/admin/printing-manage"
            element={<ManagePrintingPage />}
          />
          <Route
            path="admin/customer-service"
            element={<CustomerServicePage />}
          />
        </Route>
        <Route path={path.HOMEPAGESTUDENT} element={<HomePageStudent />} />
        <Route
          path={path.HOMEPAGEADMIN}
          element={
            // <AuthenAdmin>
            <HomePageAdmin />
            // </AuthenAdmin>
          }
        />
      </Route>
      <Route path={path.LOGIN} element={<LoginPage />} />
      <Route path="/counter" element={<Counter />} />
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
