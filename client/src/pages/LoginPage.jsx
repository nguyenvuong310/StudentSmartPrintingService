import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import CookieDialog from "../components/Dialog";
import { useNavigate } from "react-router-dom";
import { handleAuth } from "../service/userService";
import checkValidToken from "../hoc/checkValidToken";
const LoginPage = () => {
  const [language, setLanguage] = useState("vie");
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event);
  };

  const handleLogin = async (role) => {
    const valid = await checkValidToken();
    if (role === "student") {
      if (valid) {
        navigate("/homepage-student");
      } else {
        handleAuth("student");
      }
    } else {
      if (valid) {
        navigate("/homepage-admin");
      } else {
        handleAuth("officer");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#e2e6e9]">
      <Card className="my-10 w-[475px] px-5 py-10">
        <img src={logo} alt="logo" className="w-36 self-center pb-10" />
        <hr className="my-1 h-0.5 border-t-0 bg-[#ebf1f5] opacity-100 dark:opacity-50" />
        <CardBody className="flex flex-col gap-2">
          <Typography variant="h6">
            {language === "vie" ? "Đăng nhập dành cho" : "Login for"}
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            className="font-normal"
            size="md"
            onClick={() => handleLogin("student")}
          >
            {language === "vie"
              ? "Cán bộ / Sinh viên trường ĐH Bách Khoa Tp.HCM"
              : "Staff / Students of HCMUT"}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            className="font-normal"
            onClick={() => handleLogin("admin")}
          >
            {language === "vie"
              ? "Nhân viên dịch vụ in ấn sinh viên - SPSO"
              : "Student Printing Services Officer - SPSO"}
          </Button>
        </CardBody>
        <hr className="my-1 h-0.5 border-t-0 bg-[#ebf1f5] opacity-100 dark:opacity-50" />
        <CardFooter className="grid grid-cols-5 pt-5">
          <Select
            size="md"
            label="Select Language"
            onChange={handleLanguageChange}
          >
            <Option value="eng">English</Option>
            <Option value="vie">Vietnamese</Option>
          </Select>
          <div className="col-span-2 col-start-4">
            <CookieDialog />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
