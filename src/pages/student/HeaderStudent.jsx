import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/logo.png";
import ProfileMenu from "../../components/ProfileMenu";
const HeaderStudent = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const generateNavItem = (icon, to, text) => (
    <Typography
      as="li"
      variant="small"
      className="flex items-center gap-x-2 p-1 font-bold"
    >
      {icon && cloneElement(icon, { className: "w-6" })}
      <Link to={to} className="flex items-center">
        {text}
      </Link>
    </Typography>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      {generateNavItem(<HomeIcon />, "/", "TRANG CHỦ")}

      {generateNavItem(<UserIcon />, "/login", "ĐĂNG NHẬP")}
    </ul>
  );

  return (
    <Navbar
      className="mx-auto  bg-cover px-4 py-2  lg:px-8 lg:py-4"
      fullWidth={true}
    >
      <Collapse open={openNav}>
        <div className="container mx-auto text-black">{navList}</div>
      </Collapse>
      <div className="flex w-full items-center justify-between text-blue-gray-900">
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6" />
          ) : (
            <Bars3Icon className="w-6" />
          )}
        </IconButton>
        <Link to="/" className="grid grid-cols-5 items-center gap-3">
          <img className="col-span-1 w-16" src={logo} alt="logo" />
          <div className="col-span-4 flex flex-col">
            <Typography variant="small">TRƯỜNG ĐẠI HỌC BÁCH KHOA</Typography>
            <Typography variant="small" className="font-bold">
              HỆ THỐNG IN ẤN SINH VIÊN
            </Typography>
          </div>
        </Link>
        <div className="me-5 hidden lg:block">{navList}</div>

        <div className="flex items-center gap-5">
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
};

export default HeaderStudent;
