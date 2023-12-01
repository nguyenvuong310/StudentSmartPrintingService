import React from "react";
import { useSelector } from "react-redux";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {
    ShoppingCartIcon

} from "@heroicons/react/24/outline";
import SelectR from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { Checkbox } from "flowbite-react";

const optionsPaper = [
    { value: 'a4', label: 'A4' },
    { value: 'a5', label: 'A5' },
]

const PaperTypes = () => (
    <CreatableSelect isClearable options={optionsPaper} />
)


export default function BuyPageModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="w-40 h-10 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm 
                pl-4 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <div class="flex flex-row space-x-2"> <ShoppingCartIcon className="w-5" /> Mua Trang In</div>
            </button>
            {showModal ? (
                <>
                    <div class="justify-center flex fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div class="flex flex-col justify-between w-[30rem] p-8 bg-white m-auto rounded-lg">
                            <div className="grid grid-cols-1 gap-6 mt-2 mb-6">
                                <div>
                                    <div className="font-bold mb-2">
                                        Số trang:
                                    </div>
                                    <input type="text" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số trang..." />

                                </div>
                                <div>
                                    <div className="font-bold mb-2">
                                        Loại giấy:
                                    </div>
                                    <PaperTypes />
                                </div>
                                <div className="flex flex-row space-x-3 mx-2">
                                    <input type="checkbox" />
                                    <p className="font-semibold text-sm"> Bạn đồng ý với các điều khoản thanh toán cũng như các chính sách của dịch vụ SPSS </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[7rem] items-center px-[50px]">
                                <button type="button" className="bg-[#658DF1] p-1  w-20 text-white">
                                    Đồng ý
                                </button>
                                <button type="button" onClick={() => setShowModal(false)} className="bg-white p-1 w-20 border border-black">
                                    Hủy
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