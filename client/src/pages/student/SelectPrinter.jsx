import React, { useState, useEffect } from "react";
import Select from 'react-select'
import { useSelector } from "react-redux";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { getUserInfo, } from "../../service/userService";


export default function SelectPrinter(pageNum) {
    const [showModal, setShowModal] = React.useState(false);
    const [showAlert, setAlert] = useState(false);
    const [userinfo, setUserinfo] = useState({});
    useEffect(() => {
        const test = async () => {
            try {
                const data = await getUserInfo();
                setUserinfo(data.data.user)
            }
            catch (error) {
                console.error("Error fetching user infomation", error);
            }
        };
        test()
    }, []);
    const pNum = pageNum.pageNum

    const checkPNums = (pageNum) => {
        if (pageNum > userinfo.numpage) {
            setAlert(true)
            // alert('Nạp tiền vào donate cho tao')
        } else setShowModal(true)

    }
    const optionsDay = [
        { value: '01/01/2024', label: '01/01/2024' },
        { value: '02/01/2024', label: '02/01/2024' },
        { value: '03/01/2024', label: '03/01/2024' },
        { value: '04/01/2024', label: '04/01/2024' },
        { value: '05/01/2024', label: '05/01/2024' },
        { value: '06/01/2024', label: '06/01/2024' },
        { value: '07/01/2024', label: '07/01/2024' },
        { value: '08/01/2024', label: '08/01/2024' },

    ]

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

    const printers = [
        {
            id: '1',
            name: 'Máy in 2003',
            location: 'H1, cơ sở 2',
            status: '1'
        },
        {
            id: '2',
            name: 'Máy in 2004',
            location: 'H1, cơ sở 2',
            status: '0'

        },
        {
            id: '3',
            name: 'Máy in 2005',
            location: 'H1, cơ sở 2',
            status: '0'

        },
        {
            id: '4',
            name: 'Máy in 2006',
            location: 'H1, cơ sở 2',
            status: '1'

        },
        {
            id: '5',
            name: 'Máy in 2007',
            location: 'H6, cơ sở 2',
            status: '0'

        },
        {
            id: '6',
            name: 'Máy in 2008',
            location: 'H1, cơ sở 2',
            status: '1'

        },
        {
            id: '7',
            name: 'Máy in 2008',
            location: 'H1, cơ sở 2',
            status: '1'

        },

        {
            id: '8',
            name: 'Máy in 2008',
            location: 'H1, cơ sở 2',
            status: '1'

        },


    ]
    const printerList = [];
    printers.forEach((printer, index) => {
        let statusDiv = []

        if (printer.status === '1') {
            statusDiv = <>
                <div class='flex mt-1 text-sm items-center'>
                    <CheckCircleIcon class="w-7 fill-green-500 pr-1" />
                    Ready
                </div>
            </>
        } else if (printer.status === '0') {
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
                <button
                    class="hover:shadow-lg hover:shadow-gray-900/50 active:shadow-none bg-white duration-125 ease-in-out transform hover:scale-105 
                 focus-within:scale-105 focus:ring rounded-lg"
                    onBlur={e => {
                        // only re-focus if the user clicked on something
                        // that was NOT an input element
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

    return (
        <>
            <button
                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded 
                shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => checkPNums(pNum)}
            >
                Tiếp tục
            </button>
            {/* Not enough page -> alert */}
            {
                showAlert ? (
                    <>
                        <div class="fixed  inset-0 z-50 outline-none focus:outline-none ">
                            <div class="my-6 flex justify-center items-center h-screen">
                                {/*content*/}
                                <div class=" h-auto  w-[30%] min-w-[300px]  items-center bg-white rounded-lg shadow-xl 
                                     block  md:p-10 p-5 grid gap-y-10" >
                                    {/* Header */}
                                    {/* Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                                    <div class="flex  ">
                                        <p class="text-center md:text-2xl text-md font-bold">
                                            Hiện tại bạn không đủ số trang in khả dụng. Bạn có muốn mua thêm trang in?
                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex justify-center rounded-b ">
                                        <button
                                            className="text-black background-transparent  w-auto 
                                                    font-bold uppercase px-6 py-2 text-sm border border-2 border-black  shadow hover:shadow-lg  rounded
                                                    ease-linear transition-all duration-150 mr-3
                                                    "
                                            type="button"
                                            onClick={() => setAlert(false)}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-emerald-600 w-auto 
                                            font-bold uppercase text-sm px-6 py-3 rounded 
                                                    shadow hover:shadow-lg outline-none 
                                                    focus:outline-none  ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setAlert(false)}
                                        >
                                            Đồng ý
                                        </button>

                                    </div>
                                    {/* </div> */}



                                </div>
                            </div>
                        </div >

                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null
            }
            {/* Select Printer */}
            {
                showModal ? (
                    <>
                        <div class="fixed  inset-0 z-50 outline-none focus:outline-none ">
                            <div class="flex my-6  justify-center h-screen">
                                {/*content*/}
                                <div class="border-0 h-[90%] w-auto min-w-fit flex  bg-cus-blue  rounded-lg shadow-lg 
                                     block outline-none focus:outline-none " >
                                    {/* PrintConfig */}

                                    <div class="md:h-full w-full flex-1 ">
                                        <div class="flex flex-col h-full justify-center overflow-auto">

                                            {/* Header */}
                                            <div class="flex sticky h-fit top-0 z-40 items-start p-3   bg-cus-blue  border-b border-solid border-blueGray-200 rounded-t">
                                                <h3 class="text-white text-xl font-semibold">
                                                    Chọn máy in
                                                </h3>
                                            </div>
                                            {/* Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                                            <div class="flex flex-col w-full  md:grid md:grid-cols-2 md:grid-flow-row
                                         gap-x-10 gap-y-7  px-12 py-6 overflow-y-scroll 
                                         scrollbar-thin scrollbar-thumb-[#a3a2a5]
                                         scrollbar-track-gray-800/40 hover:scrollbar-thumb-[#c4c3c6] 
                                         ">
                                                {printerList}
                                            </div>
                                            {/* Select Time */}
                                            <div class="flex flex-row">
                                                <div class='w-1/2'>
                                                    <div class="flex  bg-cus-blue items-start p-3 
                                            border-b border-solid border-blueGray-200 rounded-t
                                             ">
                                                        <h3 class="text-white text-xl font-semibold ">
                                                            Chọn ngày lấy tài liệu
                                                        </h3>
                                                    </div>
                                                    <div class="px-6 py-6 w-80 ">
                                                        <Select
                                                            options={optionsDay}
                                                            id="selectTime"
                                                            styles={customStyles}
                                                            placeholder='Chọn khung giờ'
                                                            maxMenuHeight={100}
                                                            isSearchable={false}
                                                        >
                                                        </Select>
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
                                                    <div class="px-6 py-6 w-80 ">
                                                        <Select
                                                            options={optionsTime}
                                                            id="selectTime"
                                                            styles={customStyles}
                                                            placeholder='Chọn khung giờ'
                                                            maxMenuHeight={100}
                                                            isSearchable={false}
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
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Hủy
                                                </button>
                                                <button
                                                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Tiếp tục
                                                </button>
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
        </>
    );
}



// export default PrintingPage;