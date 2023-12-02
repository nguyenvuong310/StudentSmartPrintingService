import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {
    LockClosedIcon

} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdatePrinter } from "../service/adminService";
export default function UpdatePrinterModal({ printerId, printerName, printerLocation, printerType, input }) {
    const [showModal, setShowModal] = React.useState(false);
    const [printerid, setPrinterId] = useState(printerId)
    const [name, setName] = useState(printerName)
    const [location, setLocation] = useState(printerLocation)
    const [type, setType] = useState(printerType)
    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeLocation = (event) => {
        setLocation(event.target.value)
    }
    const handleOnChangeType = (event) => {
        setType(event.value)
    }
    const handleUpdatePrinter = async () => {
        const data = {
            printerid: printerid,
            name: name,
            location: location,
            type: type
        }
        await UpdatePrinter(data)
        setShowModal(false)

        toast.success('Cập nhật máy in thành công', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        input()
    }
    return (
        <>
            <button class="flex-row border-4 border-[#c4c4c4] bg-[#658DF1] px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => setShowModal(true)}>CHỈNH SỬA</button>
            {showModal ? (
                <>
                    <div class="justify-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                        <div class="extraOutline relative h-[33rem] w-[30rem] p-4 bg-white m-auto rounded-lg text-left">
                            <div class="w-full flex bg-white border-b-2 border-b-gray-500">
                                <div class="w-full font-bold px-3 py-3 text-black-600 text-2xl">Chỉnh sửa thông tin máy in</div>
                                <div className="pt-1 px-4 flex items-center text-medium font-medium leading-none cursor-pointer">
                                    <div class="flex">
                                        <button onClick={() => setShowModal(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col mx-5 mt-8">
                                <div>
                                    <div className="mb-2 text-xl">
                                        Tên
                                    </div>
                                    <input defaultValue={printerName} onChange={(event) => handleOnChangeName(event)} type="text" class="block h-14 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mt-5">
                                    <div className="mb-2 text-xl">
                                        Địa chỉ của máy
                                    </div>

                                    <input defaultValue={printerLocation} onChange={(event) => handleOnChangeLocation(event)} type="text" class="block h-14 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mt-5">
                                    <div className="mb-2 text-xl">
                                        Loại máy
                                    </div>
                                    <select defaultValue={printerType} onChange={(event) => handleOnChangeType(event)} class="block h-14 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option> In thường</option>
                                        <option>In màu</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button onClick={() => handleUpdatePrinter()} type="button" className="bg-[#3563E9] text-base p-1 w-20 m-5 absolute bottom-0 right-0 text-white">
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div >
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}