import React, { useState, useEffect, Component } from "react";
import Select from 'react-select'
import ReactDOM from 'react-dom/client';

import { useSelector } from "react-redux";
import { CheckCircleIcon, XCircleIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { getUserInfo, getAllPrinter, Print } from "../../service/userService";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert, Button } from "@material-tailwind/react";
export default function SelectPrinter(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [showAlert, setAlert] = useState(false);
    const [userinfo, setUserinfo] = useState({});
    const [printers, setprinters] = useState([])
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [printerid, setPrinterid] = useState("")
    const [location, setLocation] = useState("")
    const [configprint, setConfig] = useState({})
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);
    const [open10, setOpen10] = React.useState(false);
    const [open11, setOpen11] = React.useState(false);
    const [open12, setOpen12] = React.useState(false);
    const [open13, setOpen13] = React.useState(false);

    const [loading, setLoading] = useState(false)


    const handlesetPrinterid = (printer) => {
        const idx = printer.id
        setPrinterid(printer.id)
        setLocation(printer.location)
        const ele = document.getElementById(idx)
        ele.classList.add('scale-105', 'ring')
        const getPrinter = printers.filter((printer) => (printer.id !== idx))

        getPrinter.forEach((printer, index) => {
            const printerEle = document.getElementById(printer.id)
            printerEle.classList.remove('scale-105')
            printerEle.classList.remove('ring')
        });

    }
    const handleChangeDate = (event) => {
        setDate(event.target.value)
    }
    const handleChangeTime = (event) => {
        setTime(event.value)
    }

    useEffect(() => {
        const test = async () => {
            try {

                const data = await getUserInfo();
                setUserinfo(data.data.user)


                const printer = await getAllPrinter();
                setprinters(printer.data.printer)

            }
            catch (error) {
                console.error("Error fetching user infomation", error);
            }
        };
        test()
    }, []);

    const checkvalidconfigprint = () => {
        const configprint = {
            numpage: props.handleNumpage(props.numpageconfig),
            layout: props.layout,
            pagesize: props.pagesize,
            pageperside: props.pageperside,
            alignment: props.alignment,
            scale: props.scale,
            copy: props.copy
        }
        setConfig(configprint)
        if (configprint.numpage == -1 || !configprint.numpage) {
            setOpen4(true)
            setTimeout(() => {
                setOpen4(false)
            }, 2000);
            return
        }
        if (!props.layout) {
            setOpen5(true)
            setTimeout(() => {
                setOpen5(false)
            }, 2000);
            return
        }
        if (!props.pagesize) {
            setOpen6(true)
            setTimeout(() => {
                setOpen6(false)
            }, 2000);
            return
        }
        if (props.pageperside == 0) {
            setOpen7(true)
            setTimeout(() => {
                setOpen7(false)
            }, 2000);
            return
        }
        if (!/^\d+$/.test(props.pageperside)) {
            setOpen8(true)
            setTimeout(() => {
                setOpen8(false)
            }, 2000);
            return
        }
        if (!props.alignment) {
            setOpen9(true)
            setTimeout(() => {
                setOpen9(false)
            }, 2000);
            return
        }
        if (!props.scale) {
            setOpen10(true)
            setTimeout(() => {
                setOpen10(false)
            }, 2000);
            return
        }
        if (props.copy == 0) {
            setOpen11(true)
            setTimeout(() => {
                setOpen11(false)
            }, 2000);
            return
        }
        if (!/^\d+$/.test(props.copy)) {
            setOpen12(true)
            setTimeout(() => {
                setOpen12(false)
            }, 2000);
            return
        }
        if (configprint.numpage > props.numpage) {
            setOpen13(true)
            setTimeout(() => {
                setOpen13(false)
            }, 2000);
            return

        }
        setShowModal(true)

    }
    const optionsTime = [
        { value: '6h-7h', label: '6h-7h' },
        { value: '7h-8h', label: '7h-8h' },
        { value: '8h-9h', label: '8h-9h' },
        { value: '9h-10h', label: '9h-10h' },
        { value: '10h-11h', label: '10h-11h' },
        { value: '11h-12h', label: '11h-12h' },
        { value: '12h-13h', label: '12h-13h' },
        { value: '13h-14h', label: '13h-14h' },
        { value: '14h-15h', label: '14h-15h' },
        { value: '15h-16h', label: '15h-16h' },
        { value: '16h-17h', label: '16h-17h' },
        { value: '17h-18h', label: '17h-18h' },
    ]

    const printerList = [];
    printers.forEach((printer, index) => {
        let statusDiv = []

        if (printer.status === true) {
            statusDiv = <>
                <div class='flex mt-1 text-sm items-center'>
                    <CheckCircleIcon class="w-7 fill-green-500 pr-1" />
                    Ready
                </div>
            </>
        } else if (printer.status === false) {
            statusDiv = <>
                <div class='flex mt-1 text-sm items-center'>
                    <XCircleIcon class="w-7 fill-red-500 pr-1" />
                    Not ready
                </div>
            </>
        }
        printerList.push(
            <>
                {/* Item */}
                <button id={printer.id}
                    onClick={() => handlesetPrinterid(printer)}
                    class="hover:shadow-lg hover:shadow-gray-900/50 active:shadow-none bg-white duration-125 ease-in-out transform hover:scale-105 
                  rounded-lg"
                    onBlur={e => {

                        if (e.relatedTarget === null) {
                            e.target.focus();
                        }
                    }}
                >
                    <div class='flex w-72 h-20' >
                        <div class="flex flex-1 bg-white justify-items-center 
                 bg-[url('././assets/printer.png')] bg-cover bg-center bg-no-repeat bg-[length:84px_79px] rounded-lg"  >
                        </div>
                        <div class='flex flex-col w-48 bg-[#D6E4FD]  rounded-l-xl rounded-lg px-3 pt-1 '>
                            <div class="flex font-bold">
                                {printer.name}
                            </div>
                            <div class="flex text-sm">
                                {printer.location}
                            </div>
                            {statusDiv}
                        </div>

                    </div>
                </button>
            </>
        );
    })

    const customStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#608bd1" : null,
                color: "#333333",
                cursor: "pointer",
            };
        },

    }
    const handlePrint = async () => {
        if (!printerid) {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000);
            return
        }

        if (!date) {
            setOpen1(true)
            setTimeout(() => {
                setOpen1(false)
            }, 2000);
            return
        }
        if (!time) {
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 2000);
            return
        }

        const setupprinter = {
            printerid: printerid,
            time: time,
            date: date,
            location: location
        }



        const data = {
            user: userinfo,
            doc: props.doc,
            configprint: configprint,
            setupprinter: setupprinter,
        }
        await Print(data)

        props.offModalPrint(true)
        setShowModal(false)


        setTime("")
        setDate("")
        setPrinterid("")
        setLocation("")


    }
    const handleCancel = () => {
        setTime("")
        setDate("")
        setPrinterid("")
        setLocation("")
        setShowModal(false)
    }
    return (
        <>
            <button
                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded 
                shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => checkvalidconfigprint()}
            >
                Tiếp tục
            </button>
            <div class="fixed z-50 top-10 right-2 " id="alert">
                <Alert open={open4} onClose={() => { setOpen4(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Thông tin số trang chưa hợp lệ
                </Alert>
                <Alert open={open5} onClose={() => { setOpen5(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn layout
                </Alert>
                <Alert open={open6} onClose={() => { setOpen6(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn cỡ giấy
                </Alert>
                <Alert open={open7} onClose={() => { setOpen7(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn số trang trên một mặt
                </Alert>
                <Alert open={open8} onClose={() => { setOpen8(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Số trang trên một mặt không hợp lệ
                </Alert>
                <Alert open={open9} onClose={() => { setOpen9(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn căn lề
                </Alert>
                <Alert open={open10} onClose={() => { setOpen10(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn tỉ lệ
                </Alert>
                <Alert open={open11} onClose={() => { setOpen11(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Chưa chọn số bản in
                </Alert>
                <Alert open={open12} onClose={() => { setOpen12(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Số bản in không hợp lệ
                </Alert>
                <Alert open={open13} onClose={() => { setOpen13(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Vượt quá số trang cho phép
                </Alert>


            </div>
            {/* Select Printer */}
            {
                showModal ? (
                    <>
                        <div class="fixed  inset-0 z-50 outline-none focus:outline-none ">
                            <div class="fixed z-50 top-10 right-2 " id="alert">
                                <Alert open={open} onClose={() => { setOpen(false) }}
                                    animate={{
                                        mount: { x: 0 },
                                        unmount: { x: 100 },
                                    }}
                                    icon={<ExclamationCircleIcon className="w-6" />}
                                    className="bg-red-500 w-[21rem]">
                                    Chưa chọn máy in
                                </Alert>

                                <Alert open={open1} onClose={() => { setOpen1(false) }}
                                    animate={{
                                        mount: { x: 0 },
                                        unmount: { x: 100 },
                                    }}
                                    icon={<ExclamationCircleIcon className="w-6" />}
                                    className="bg-red-500 w-[21rem]">
                                    Chưa chọn ngày lấy tài liệu
                                </Alert>
                                <Alert open={open2} onClose={() => { setOpen2(false) }}
                                    animate={{
                                        mount: { x: 0 },
                                        unmount: { x: 100 },
                                    }}
                                    icon={<ExclamationCircleIcon className="w-6" />}
                                    className="bg-red-500 w-[21rem]">
                                    Chưa chọn thời gian lấy tài liệu
                                </Alert>

                            </div>

                            <div class="flex my-6  justify-center h-screen">
                                {/*content*/}
                                <div class="border-0 h-[90%] w-auto min-w-fit flex  bg-cus-blue  rounded-lg shadow-lg 
                                     block outline-none focus:outline-none " >
                                    {/* PrintConfig */}

                                    <div class="md:h-full w-full flex-1 ">
                                        <div class="flex flex-col h-full justify-center overflow-auto scrollbar-thin scrollbar-thumb-[#a3a2a5]
                                         scrollbar-track-gray-800/40 hover:scrollbar-thumb-[#c4c3c6]">

                                            {/* Header */}
                                            <div class="flex sticky top-0 z-40 items-start p-3  bg-cus-blue  border-b border-solid 
                                             rounded-t">
                                                <h3 class="text-white text-xl font-semibold">
                                                    Chọn máy in
                                                </h3>
                                            </div>
                                            {/* Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                                            <div class="overflow-auto   scrollbar-thin scrollbar-thumb-[#a3a2a5]
                                         scrollbar-track-gray-800/40 hover:scrollbar-thumb-[#c4c3c6] ">

                                                <div id="printerList" class="flex flex-col   md:grid md:grid-cols-2 md:grid-flow-row
                                         gap-x-10 gap-y-7 px-12 py-6 ">
                                                    {printerList}
                                                </div>
                                                {/* Select Time */}
                                                <div class="flex md:flex-row flex-col">
                                                    <div class='md:w-1/2'>
                                                        <div class="flex  bg-cus-blue items-start p-3 
                                                        border-b border-solid border-blueGray-200 rounded-t
                                                         ">
                                                            <h3 class="text-white text-xl font-semibold ">
                                                                Chọn ngày lấy tài liệu
                                                            </h3>
                                                        </div>
                                                        <div class="px-6 py-6 w-80 ">
                                                            <input onChange={(event) => handleChangeDate(event)} id="selectTime" styles={customStyles} maxMenuHeight={100}
                                                                isSearchable={false} type="date" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="flex  bg-cus-blue items-start p-3 
                                            border-b border-solid border-blueGray-200 rounded-t
                                             ">
                                                            <h3 class="text-white text-xl font-semibold ">
                                                                Chọn thời điểm lấy tài liệu
                                                            </h3>
                                                        </div>
                                                        <div class="px-6 py-6 w-80 z-40 ">
                                                            <Select
                                                                options={optionsTime}
                                                                id="selectTime"
                                                                styles={customStyles}
                                                                placeholder='Chọn khung giờ'
                                                                maxMenuHeight={100}
                                                                isSearchable={false}
                                                                onChange={(event) => handleChangeTime(event)}
                                                            >
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 rounded-b">

                                                    <button
                                                        className="text-white background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => handleCancel()}
                                                    >
                                                        Hủy
                                                    </button>
                                                    <button
                                                        disabled={loading}
                                                        className="disabled:bg-blue-300 disabled:hover:shadow-none enabled:bg-blue-500 text-white enabled:active:bg-emerald-600 font-bold 
                                                        uppercase text-sm px-6 py-3 rounded shadow enabled:hover:shadow-lg outline-none 
                                                        enabled:focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => handlePrint()}
                                                    >
                                                        Tiếp tục
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div >
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
            <ToastContainer />
        </>
    );
}
// export default PrintingPage;