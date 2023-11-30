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
import UploadModal from "../../components/UploadModal"
import logo from "../../assets/logo.png";
import ProfileMenu from "../../components/ProfileMenu";
import HomepageStudent from './homepageST';

const HeaderStudent = (props) => {
  const [check, setCheck] = useState(1);
  useEffect(() => {
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, [check]);

  // const [open, setOpen] = useState(1);

  // const toggleOpen = (id) => setOpen(id);
  const handleOnChangeCheck = (data) => {
    setCheck(() => data)
  }
  const test = (data) => {
    handleOnChangeCheck(data)
    props.input(data)
  }
  return (


    <nav class="bg-white dark:bg-gray-900 sticky fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* ICON & NAME*/}
        <a href="https://google.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="public/logo.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SSPS</span>
        </a>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* UPLOAD	+	 */}


        {/* KHO HỆ THỐNG & CÁ NHÂN */}
        <div id="KhoHeThong" class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="me-2" role="presentation">
              <button onClick={() => test(1)} class="inline-block p-4 border-b-2 rounded-t-lg" type="button" role="tab" aria-controls="profile" aria-selected="false">KHO HỆ THỐNG</button>
            </li>
            <li class="me-2" role="presentation">
              <button onClick={() => test(2)} class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button" role="tab" aria-controls="dashboard" aria-selected="false">KHO CÁ NHÂN</button>
            </li>
          </ul>
        </div>

        {/* SEARCH */}
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm..." />

        </div>

        {/* LANGUAGE */}
        <div class="relative hidden sm:flex space-x-4">
          <div class="flex flex-col text-black-300 rounded-md text-sm font-semibold px-3">
            <div class="pl-4 pt-3 flex flex-row"> <HomeIcon className="w-5 pr-1" /> Ngôn ngữ</div>
            <select class="flex flex-col text-black-300 rounded-md px-5 py-1 text-xs font-light">
              <option>Tiếng Việt</option>
              <option>Tiếng Anh</option>
            </select>
          </div>
        </div>
        <UploadModal />
        <ProfileMenu input={handleOnChangeCheck} value={check} />
        {check == 3 && props.input(3)}


        {/* USER */}

      </div>

    </nav>

  );
};

export default HeaderStudent;