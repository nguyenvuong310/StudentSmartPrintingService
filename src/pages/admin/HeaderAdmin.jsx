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
  LanguageIcon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  PrinterIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

import logo from "../../assets/logo.png";

const HeaderAdmin = () => {
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

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const handleLogout = () => {
    // dispatch(logout());
    window.open(`http://localhost:8080/auth/logout`, "_self");
    // navigate("/");
  };

  return (

    <nav class="bg-white border-b border-cyan-800 sticky top-0 z-40">
      <div class="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div class="absolute bottom-0 left-0 py-2  sm:hidden block ">
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

            <div class="flex flex-shrink-0 items-center">
              <img class="h-11 w-auto" src={logo} alt="HCMUT" />
              <p class="text-indigo-500 text-2xl px-4 py-2 font-bold ">SPSO</p>
            </div>
          </div>
  
        <div className="me-5 hidden lg:block">{navList}</div>

          <div class="inset-y-0 right-0 flex items-center sm:flex hidden sm:static sm:inset-auto ">
            <div class="flex flex-col  text-black-300 rounded-md text-sm font-semibold pr-5">
              <div class="pl-4 pt-3 flex flex-row "> <LanguageIcon className="w-5 pr-1 " /> Ngôn ngữ</div>
              <select class="flex flex-col   rounded-md px-5 py-1 text-xs font-light">
                <option>Tiếng Việt</option>
                <option>Tiếng Anh</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <p class="text-red-400 text-sm py-2 font-bold ">admin</p>
              <ProfileMenu
              />
            </div>

          </div>
        </div>
      </div>
      {/* </div> */}

      <div class="sm:hidden flex">
        <Collapse open={open}>
          <Card className=" mx-auto ">
            <CardBody >
              <Typography variant="small"  >
                <hr className="my-2 border-blue-gray-50 " />
                <div class="flex py-2 pl-1 gap-2 hover:bg-blue-200 hover:text-white text-base font-medium text-gray-700 block rounded-md">
                  <UserGroupIcon className="w-5" />
                  <div onClick="#">
                    Quản lí sinh viên
                  </div>
                </div>
                <hr className="my-2 border-blue-gray-50" />
                <div class="flex py-2 pl-1 gap-2 hover:bg-blue-200 hover:text-white text-base font-medium text-gray-700 block rounded-md">
                  <PrinterIcon className="w-5" />
                  <div onClick="#">
                    Quản lí máy in
                  </div>
                </div>
                <hr className="my-2 border-blue-gray-50" />
                <div class="flex py-2 pl-1 gap-2 hover:bg-blue-200 hover:text-white text-base font-medium text-gray-700 block rounded-md">
                  <ClockIcon className="w-5" />
                  <div onClick="#">
                    Quản lí lịch sử in
                  </div>
                </div>
                <hr className="my-2 border-blue-gray-50 " />
                <div class="flex py-2 pl-1 gap-2 hover:bg-blue-200 hover:text-white text-base font-medium text-gray-700 block rounded-md">
                  <ArrowLeftOnRectangleIcon className="w-5" />
                  <div onClick={handleLogout}>
                    Đăng xuất
                  </div>
                </div>
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </nav >
    // a

  );
};

export default HeaderAdmin;
