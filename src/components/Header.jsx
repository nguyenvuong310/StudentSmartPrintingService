import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";
import {
  HomeIcon,
  LanguageIcon
} from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
  Disclosure,
  Menu,
  Transition,
  Collapse
} from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import logo from "../assets/logo.png";

const Header = ({ role }) => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  // const generateNavItem = (icon, to, text) => (
  //   <Typography
  //     as="li"
  //     variant="small"
  //     className="flex items-center gap-x-2 p-1 font-bold"
  //   >
  //     {icon && cloneElement(icon, { className: "w-6" })}
  //     <Link to={to} className="flex items-center">
  //       {text}
  //     </Link>
  //   </Typography>
  // );

  // const navList = (
  //   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
  //     {generateNavItem(<HomeIcon />, "/", "TRANG CHỦ")}

  //     {generateNavItem(<UserIcon />, "/login", "ĐĂNG NHẬP")}
  //   </ul>
  // );

  return (
    <nav class="bg-white shadow-xl">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleOpen} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-12 w-auto" src={logo} alt="HCMUT_LOGO" />
            </div>
            <div class="flex flex-col space-x-4 px-3 py-2">
              {/* <a href="#" class="text-blue-500 rounded-md px-3 py-3 text-lg font-bold">SSPS</a> */}
              <Typography variant="small" className="hidden sm:ml-6 sm:block">TRƯỜNG ĐẠI HỌC BÁCH KHOA</Typography>
              <Typography variant="small" className="px-2 font-bold">
                HỆ THỐNG IN ẤN SINH VIÊN
              </Typography>
            </div>
          </div>
          <div class="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <div class="flex flex-col text-black-300 rounded-md text-sm font-semibold px-3">
                  <div class="pl-4 pt-3 flex flex-row"> <LanguageIcon className="w-5 pr-1" /> Ngôn ngữ</div>
                  <select class="flex flex-col text-black-300 rounded-md px-5 py-1 text-xs font-light">
                    <option>Tiếng Việt</option>
                    <option>Tiếng Anh</option>
                  </select>
                </div>
                <div class="pt-4">
                  <a href="/login" class="bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Đăng nhập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">

        </div>
      </div> */}
      <div class="sm:hidden flex" id="mobile-menu">
        <Collapse open={open}>
          <Card className=" mx-auto ">
            <CardBody>
              <Typography>
                <a href="login" class="text-gray-700 hover:bg-blue-200 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Đăng nhập</a>
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </nav>

    // <Navbar
    //   className="mx-auto  bg-cover px-4 py-2  lg:px-8 lg:py-4"
    //   fullWidth={true}
    // >
    //   <Collapse open={openNav}>
    //     <div className="container mx-auto text-black">{navList}</div>
    //   </Collapse>
    //   <div className="flex w-full items-center justify-between text-blue-gray-900">
    //     <IconButton
    //       variant="text"
    //       className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //       ripple={false}
    //       onClick={() => setOpenNav(!openNav)}
    //     >
    //       {openNav ? (
    //         <XMarkIcon className="w-6" />
    //       ) : (
    //         <Bars3Icon className="w-6" />
    //       )}
    //     </IconButton>
    //     <Link to="/" className="grid grid-cols-5 items-center gap-3">
    //       <img className="col-span-1 w-16" src={logo} alt="logo" />
    //       <div className="col-span-4 flex flex-col">
    //         <Typography variant="small">TRƯỜNG ĐẠI HỌC BÁCH KHOA</Typography>
    //         <Typography variant="small" className="font-bold">
    //           HỆ THỐNG IN ẤN SINH VIÊN
    //         </Typography>
    //       </div>
    //     </Link>
    //     <div className="me-5 hidden lg:block">{navList}</div>
    //     {/* <div className="flex items-center gap-5">
    //       {role !== null ? <ProfileMenu /> : null}
    //     </div> */}
    //   </div>
    // </Navbar>
  );
};

export default Header;
