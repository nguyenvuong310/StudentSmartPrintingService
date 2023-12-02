import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    UserGroupIcon,
    PrinterIcon,
    ClockIcon
} from "@heroicons/react/24/solid";

const MenuBarAdmin = () => {
    const navigate = useNavigate();
    const handleMenu = (title) => {
        if (title === "student-manage") {
            navigate("/admin/student-manage");
        } else if (title === "printer-manage") {
            navigate("/admin/printer-manage");
        }
        else if (title === "history-manage") {
            navigate("/admin/printing-history-manage");
        }
    }

    return (
        <>
            {/* <!-- component --> */}
            <div class="pt-20 z-20  w-[18rem] sm:flex hidden bg-gradient-to-b from-blue-800 to-cyan-500 h-screen rounded-r-xl">
                <div class=" flex flex-col bg-gradient-to-b from-indigo-800/10 to-blue-500 text-white  w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div class="mb-2 p-5 border-b ">
                        <h5 class=" antialiased tracking-normal text-4xl font-bold font-mono leading-snug ">MENU</h5>
                    </div>
                    <nav class="flex flex-col gap-3  py-5 pr-2 font-sans text-start text-lg leading-tight">
                        <div onClick={() => handleMenu("student-manage")} role="button" tabindex="0" class="border-solid border-2 flex gap-2 items-center w-full p-3 rounded-lg transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900">
                            <UserGroupIcon className="w-6" />
                            <div class="grid place-items-center mr-4">
                                Quản lý sinh viên
                            </div>
                        </div>
                        <div onClick={() => handleMenu("printer-manage")} role="button" tabindex="0" class="gap-2 border-solid border-2 flex items-center w-full p-3 rounded-lg transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900">
                            <PrinterIcon className="w-6" />
                            <div class="grid place-items-center mr-4">
                                Quản lý máy in
                            </div>
                        </div>
                        <div onClick={() => handleMenu("history-manage")} role="button" tabindex="0" class="gap-2 border-solid border-2 flex items-center w-full p-3 rounded-lg transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900">
                            <ClockIcon className="w-6" />
                            <div class="grid place-items-center mr-4">
                                Quản lý lịch sử in
                            </div>
                        </div>

                    </nav>
                </div>
            </div>


        </>

    )
}


export default MenuBarAdmin;