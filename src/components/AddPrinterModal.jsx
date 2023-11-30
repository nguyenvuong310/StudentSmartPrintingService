import React from "react";
import { useSelector } from "react-redux";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {
    LockClosedIcon

} from "@heroicons/react/24/outline";


export default function AddPrinterModal() {
    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <button className="flex bg-[#7FB519] border rounded-lg my-2 text-white text-sm px-1 py-1" onClick={() => setShowModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-[#7FB519] place-items-center w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="mt-1">Thêm máy in</span>

            </button>
            {showModal ? (
                <>
                    <div class="justify-center flex fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div class="extraOutline relative w-[30rem] p-4 bg-white m-auto rounded-lg">
                            <div class="w-full flex bg-white border-b-2 border-b-gray-500">
                                <div class="w-full font-bold px-3 py-3 text-black-600 text-2xl">Nhập thông tin máy in</div>
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
                                    <input type="text" class="block h-20 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Điền tên máy in" />
                                </div>
                                <div className="mt-5">
                                    <div className="mb-2 text-xl">
                                        Địa chỉ của máy
                                    </div>

                                    <input type="text" class="block h-20 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ĐHBK cơ sở 1, tòa B6, tầng 1" />
                                </div>
                                <div className="mt-5">
                                    <div className="mb-2 text-xl">
                                        Loại máy
                                    </div>

                                    <select class="block h-20 w-full p-2 ps-2 text-medium text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected> In thường</option>
                                        <option>In màu</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="button" className="bg-[#3563E9] p-1 w-20 m-2 absolute bottom-0 right-0 text-white">
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



// export default PrintingPage;