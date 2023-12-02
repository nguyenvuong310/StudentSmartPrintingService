import React from "react";
import {
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buypage } from "../service/userService"
export default function BuyPageModal(props) {
    const optionsPaper = [
        { value: 1000, label: 'A3' },
        { value: 500, label: 'A4' },
        { value: 250, label: 'A5' },
    ]
    // const PaperTypes = () => (
    //     <CreatableSelect isClearable options={optionsPaper}
    //         onChange={(event) => handlesetPagesize(event)}
    //     />
    // )

    const [showModal, setShowModal] = React.useState(false);
    const [numpage, setNumpage] = useState(0)
    const [pagesize, setPagesize] = useState(0)
    const [totalMoney, setMoney] = useState(0)
    const [numpagebill, setnumpagebill] = useState(0)
    useEffect(() => {
        if (showModal == false) {
            setNumpage(0);
            setPagesize(0);
        }
        calMoney()
    }, [pagesize, numpage, showModal]);

    const handlesetPagenum = (event) => {
        setNumpage(event.target.value)
    }

    const handlesetPagesize = (event) => {
        setPagesize(event.value)
        if (event.value == 1000) setnumpagebill(2)
        if (event.value == 500) setnumpagebill(1)
        if (event.value == 250) setnumpagebill(0.5)
    }

    const calMoney = () => {
        setMoney(pagesize * numpage)
    }
    const handleBuyPage = async () => {
        const data = {
            userid: props.userinfo.userid,
            numpage: numpage * numpagebill,
            price: totalMoney,
            payConfirm: false,
        }
        await buypage(data)
        setShowModal(false)
        props.input(!props.buyed)
        toast.success('Mua thành công', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
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
                                    <input onChange={(event) => handlesetPagenum(event)} type="text" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số trang..." />

                                </div>
                                <div>
                                    <div className="font-bold mb-2">
                                        Loại giấy:
                                    </div>
                                    {/* <PaperTypes /> */}
                                    <Select options={optionsPaper}
                                        placeholder='Tùy chọn'
                                        onChange={(event) => handlesetPagesize(event)}
                                    >
                                    </Select>
                                </div>
                                <div className="font-bold mb-2 flex flex-col space-y-3">
                                    <p>Tổng tiền:</p>
                                    <div className="grid grid-cols-2 gap-[20rem] place-content-between">
                                        <p className="ml-2">{totalMoney.toLocaleString()}</p>
                                        <p>VND</p>
                                    </div>
                                    <hr className=" border-blue-gray-50" />
                                </div>

                                <div className="flex flex-row space-x-3 mx-2">
                                    <input type="checkbox" />
                                    <p className="font-semibold text-sm"> Bạn đồng ý với các điều khoản thanh toán cũng như các chính sách của dịch vụ SPSS </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[7rem] items-center px-[50px]">
                                <button onClick={() => handleBuyPage()} type="button" className="bg-[#658DF1] p-1  w-20 text-white">
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