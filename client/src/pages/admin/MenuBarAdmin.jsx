import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  UserGroupIcon,
  PrinterIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const MenuAdmin = () => {
  const navigate = useNavigate();
  const handleMenu = (title) => {
    if (title === "student-manage") {
      navigate("/admin/student-manage");
    } else if (title === "printer-manage") {
      navigate("/admin/printer-manage");
    } else if (title === "history-manage") {
      navigate("/admin/printing-history-manage");
    }
  };

  return (
    <>
      {/* <!-- component --> */}
      <div class="z-20 hidden h-screen w-[18rem] rounded-r-xl bg-gradient-to-b from-blue-800 to-cyan-500  pt-20 sm:flex">
        <div class=" flex w-[16rem] flex-col bg-gradient-to-b from-indigo-800/10 to-blue-500  p-4 text-white shadow-xl shadow-blue-gray-900/5">
          <div class="mb-2 flex border-b p-5 ">
            <h5 class=" font-mono text-4xl font-bold leading-snug tracking-normal antialiased ">
              MENU
            </h5>
          </div>
          <nav class="flex flex-1 flex-col gap-3  py-5 pr-2 text-start font-sans text-lg leading-tight">
            <div
              onClick={() => handleMenu("student-manage")}
              role="button"
              tabindex="0"
              class="flex w-full items-center gap-2 rounded-lg border-2 border-solid p-3 transition-all hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900 focus:bg-blue-50 focus:bg-opacity-80 focus:text-blue-900 active:bg-gray-50 active:bg-opacity-80 active:text-blue-900"
            >
              <UserGroupIcon className="w-6" />
              <div class="mr-4 grid place-items-center">Quản lý sinh viên</div>
            </div>
            <div
              onClick={() => handleMenu("printer-manage")}
              role="button"
              tabindex="0"
              class="flex w-full items-center gap-2 rounded-lg border-2 border-solid p-3 transition-all hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900 focus:bg-blue-50 focus:bg-opacity-80 focus:text-blue-900 active:bg-gray-50 active:bg-opacity-80 active:text-blue-900"
            >
              <PrinterIcon className="w-6" />
              <div class="mr-4 grid place-items-center">Quản lý máy in</div>
            </div>
            <div
              onClick={() => handleMenu("history-manage")}
              role="button"
              tabindex="0"
              class="flex w-full items-center gap-2 rounded-lg border-2 border-solid p-3 transition-all hover:bg-blue-50 hover:bg-opacity-80 hover:text-blue-900 focus:bg-blue-50 focus:bg-opacity-80 focus:text-blue-900 active:bg-gray-50 active:bg-opacity-80 active:text-blue-900"
            >
              <ClockIcon className="w-6" />
              <div class="mr-4 grid place-items-center">Quản lý lịch sử in</div>
            </div>
          </nav>
          <div class=" grid-rows mb-2 flex grid gap-1 border-t pl-3 pt-3 ">
            <div>
              <a class="text-sm   text-white" href="">
                Điều khoản dịch vụ
              </a>
            </div>
            <div>
              <a class="text-sm   text-white" href="">
                Về chúng tôi
              </a>
            </div>
            <div>
              <a class="text-sm   text-white" href="">
                Liên hệ
              </a>
            </div>
            <div class="w-[80%] text-sm text-white">
              Copyright 2023 SPSS - Power by BAOSRANGER
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuAdmin;
