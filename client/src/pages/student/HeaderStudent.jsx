import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";

import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Button,
  Card,
  CardBody,
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
  ClockIcon,
} from "@heroicons/react/24/outline";
import UploadModal from "../../components/UploadModal";
import ButtonUpload from "../../components/buttonUpload";
import logo from "../../assets/logo.png";
import ProfileMenu from "../../components/ProfileMenu";
// import HomepageStudent from "./homepageST";
// import SelectPrinter from "./SelectPrinter";
// import PrintingPage from "./PrintingPage";
const HeaderStudent = (props) => {
  const [check, setCheck] = useState(1);
  const [content, setContent] = useState("");
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };
  // const [open, setOpen] = useState(1);

  // const toggleOpen = (id) => setOpen(id);
  const handleOnChangeCheck = (data) => {
    setCheck(() => data);
  };
  const test = (data) => {
    handleOnChangeCheck(data);
    props.input(data);
    props.inputsearch(1);
    props.inputcontent("");
  };
  const handleSearch = async (event) => {
    if (event.key == "Enter") {
      if (props.value == 1) {
        props.inputsearch(2);
        props.input(5);
      }
      if (props.value == 2) props.inputsearch(3);
      if (props.value == 5) {
        props.inputsearch(5);
      }
      props.inputcontent(event.target.value);
      setContent("");
    }
  };
  return (
    <nav class="sticky start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between pl-4 pr-4 pt-4">
        {/* HAMBURGER ICON & LOGO*/}
        <div class="flex flex-row items-center justify-center sm:items-stretch sm:justify-start">
          <div class=" bottom-5 left-0 block  py-2 sm:hidden ">
            <div
              onClick={toggleOpen}
              type="button"
              class="hover:bg-slate-300 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-shrink-0 items-center">
            <img class="h-11 w-auto" src={logo} alt="HCMUT" />
            <p class="px-4 py-2 text-2xl font-bold text-indigo-700 ">SPSS</p>
          </div>
        </div>

        {/*<a href="/homepage-student" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="public/logo.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SSPS</span>
        </a>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
           </button> */}

        {/* KHO HỆ THỐNG & CÁ NHÂN */}
        <div class="mb-0  hidden sm:flex">
          <ul
            class="-mb-px flex flex-wrap text-center text-sm font-medium"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                onClick={() => test(1)}
                class="inline-block rounded-t-lg border-b-4 p-4 pb-7 pt-6 hover:border-blue-700 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:bg-blue-50 dark:hover:text-gray-300"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                KHO HỆ THỐNG
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                onClick={() => test(2)}
                class="inline-block rounded-t-lg border-b-4 p-4 pb-7 pt-6 hover:border-blue-700 hover:text-blue-700 focus:border-blue-700 focus:text-blue-700 active:bg-blue-50 dark:hover:text-gray-300"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                KHO CÁ NHÂN
              </button>
            </li>
          </ul>
        </div>

        {/* SEARCH */}
        <div class="relative hidden lg:flex">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            onKeyDown={(event) => handleSearch(event)}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            type="text"
            id="search-navbar"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>

        {/* LANGUAGE */}
        <div class="relative hidden space-x-4 pb-5 xl:flex">
          <div class="text-black-300 flex flex-col rounded-md px-3 text-sm font-semibold">
            <div class="flex flex-row pl-4 pt-3">
              {" "}
              <LanguageIcon className="w-5 pr-1" /> Ngôn ngữ
            </div>
            <select class="text-black-300 flex flex-col rounded-md px-5 py-1 text-xs font-light">
              <option>Tiếng Việt</option>
              <option>Tiếng Anh</option>
            </select>
          </div>
        </div>

        {/* UPLOAD */}
        <div class="hidden md:flex">
          <ButtonUpload inputupload={props.inputupload} upload={props.upload} />
        </div>

        {/* PROFILE */}

        <ProfileMenu input={handleOnChangeCheck} value={check} />
        {check == 3 && props.input(3)}
        {check == 4 && props.input(4)}
      </div>

      {/* HAMBURGER MENU */}
      <div class="flex sm:hidden">
        <Collapse open={open}>
          <Card className=" mx-auto ">
            <CardBody>
              <Typography variant="small">
                <hr className="my-2 border-blue-gray-50 " />
                <div class="flex gap-2 rounded-md py-2 pl-1 text-base font-medium text-gray-700 hover:bg-blue-200 hover:text-white">
                  <UserGroupIcon className="w-5" />
                  <div onClick={() => test(1)}>KHO HỆ THỐNG</div>
                </div>
                <hr className="my-2 border-blue-gray-50" />
                <div class="flex gap-2 rounded-md py-2 pl-1 text-base font-medium text-gray-700 hover:bg-blue-200 hover:text-white">
                  <PrinterIcon className="w-5" />
                  <div onClick={() => test(2)}>KHO CÁ NHÂN</div>
                </div>
                <hr className="my-2 border-blue-gray-50" />
                <div
                  onClick={handleToggle}
                  class="flex gap-2 rounded-md py-2 pl-1 text-base font-medium text-gray-700 hover:bg-blue-200 hover:text-white"
                >
                  <ClockIcon className="w-5" />
                  <div>UPLOAD</div>
                </div>
                <UploadModal isOpen={showModal} toggle={handleToggle} />
                {/* <hr className="my-2 border-blue-gray-50 " />
                <div class="flex py-2 pl-1 gap-2 hover:bg-blue-200 hover:text-white text-base font-medium text-gray-700 rounded-md">
                  <ArrowLeftOnRectangleIcon className="w-5" />
                  <div onClick={handleLogout}>
                    Đăng xuất
                  </div>
                </div> */}
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </nav>
  );
};
export default HeaderStudent;
