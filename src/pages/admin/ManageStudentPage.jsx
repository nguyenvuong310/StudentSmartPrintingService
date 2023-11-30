import HeaderAdmin from "./HeaderAdmin";
import { useState, useEffect } from "react";
import whitefill from "../../assets/white-fill.png";
import { getAllUser, getBlockedUser,blockUser } from "../../service/adminService";
import { data } from "autoprefixer";
import { applyMiddleware } from "redux";
const ManageStudentPage = () => {
    const [listUser, setListUser] = useState([]);
    const [listBlockedUser, setListBlockedUser] = useState([]);

    const [toggle, setToggle] = useState(1);

    const HandleGetAllUser = async () => {
        const data = await getAllUser();
        setListUser(() => data.data.data);
        console.log(listUser);
    }

    const HandleGetBlockedUser = async () => {
        const data = await getBlockedUser();
        setListBlockedUser(() => data.data.data);
        console.log(listBlockedUser);
    }

    const HandleBlockUser = async (data) => {
        return new Promise(async(resolve, reject) => {
            try {
                await blockUser(data);
                resolve();
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <>
            <HeaderAdmin />
            <div class="flex bg-white-fill mt-1 ">
                <div class="sm:flex hidden  bg-blue-500  w-full max-w-[17rem] rounded-r-xl">
                    <div class=" relative flex flex-col  bg-blue-800 text-white h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
                        <div class="mb-2 p-5 border-b ">
                            <h5 class=" antialiased tracking-normal font-sans text-4xl font-bold leading-snug ">MENU</h5>
                        </div>
                        <nav class="flex flex-col gap-3 min-w-[220px] py-5 pr-2 font-sans text-base text-xl ">
                            <div role="button" tabindex="0" class="border-solid active border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 bg-gray-50 bg-opacity-80 hover:text-blue-900 focus:text-blue-900 text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    <a href="./student-manage" onClick={() => {
                                        HandleGetAllUser();
                                        HandleBlockUser();
                                    }}>Quản lý sinh viên</a>
                                </div>
                            </div>
                            <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    <a href="./printer-manage">Quản lý máy in</a>
                                </div>
                            </div>
                            <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    <a href="./printing-history-manage">Quản lý lịch sử in</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="flex place-content-center w-full">
                    <div class="overflow-x-auto sm:mx-0.8 lg:mx-0.8">
                        <div class="py-2 pt-10 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden shadow rounded-lg">
                                <div class="w-full flex bg-white border-2 border-b-black">
                                    <div class="w-full font-bold px-5 py-5 text-black-600 text-2xl">Quản lý sinh viên</div>
                                    <div className="pt-1 px-4 flex items-center text-medium font-medium leading-none cursor-pointer">
                                        <div class="flex">
                                            <a href="/homepage-admin">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-[#8289ad] border border-b-black flex w-full">
                                    <div className="relative">
                                        <ul class="flex flex-wrap text-sm font-medium text-center" role="tablist" data-te-nav-ref id="
                                    tab">
                                            <li class="me-2" role="presentation">
                                                <button class="flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-white focus:bg-white rounded-t-lg focus:text-black text-xl" onClick={() => { updateToggle(1); HandleGetAllUser() }}>
                                                    Danh sách sinh viên
                                                </button>
                                            </li>
                                            <li class="me-2" role="presentation">
                                                <button class="flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-white focus:bg-white rounded-t-lg focus:text-black text-xl" onClick={() => { updateToggle(2); HandleGetBlockedUser() }}>
                                                    Danh sách cấm
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="relative flex-wrap justify-between ml-auto mr-3">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" class="h-8 my-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                                        </input>
                                    </div>
                                </div>
                                <div className={toggle == 1 ? "flex" : "hidden"}>
                                    <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                        <thead class="bg-white shadow-2xl">
                                            <tr>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Họ và tên
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Email
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Số trang khả dụng
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Tùy chỉnh
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="mt-1">
                                            {
                                                listUser && listUser.map((user, index) => {
                                                    return (
                                                        <tr className="even:bg-white odd:bg-blue-50" key={index}>
                                                            <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                {user.name}
                                                            </td>
                                                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                                {user.mail}
                                                            </td>
                                                            <td class="text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                                {user.numpage}
                                                            </td>
                                                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                                <button href="#" class="border-4 border-[#c4c4c4] bg-red-500 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => HandleBlockUser(user.userid)}>CẤM</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className={toggle == 2 ? "flex" : "hidden"}>
                                    <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                        <thead class="bg-white shadow-2xl">
                                            <tr>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Họ và tên
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Email
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Số trang khả dụng
                                                </th>
                                                <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                                                    Tùy chỉnh
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="mt-1">
                                            <tr className="even:bg-white odd:bg-blue-50">
                                                <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                    Kim Nhật Thành
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                    thanh.kim100403@hcmut.edu.vn
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <input className="text-sm border border-gray-600 text-gray-900 sm:text-lg focus:ring-blue-500 focus:border-blue-500 w-12 p-1 text-center"></input>
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">GỠ CẤM</button>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white odd:bg-blue-50">
                                                <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                    Kim Nhật Thành
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                    thanh.kim100403@hcmut.edu.vn
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <input className="text-sm border border-gray-600 text-gray-900 sm:text-lg focus:ring-blue-500 focus:border-blue-500 w-12 p-1 text-center"></input>
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">GỠ CẤM</button>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white odd:bg-blue-50">
                                                <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                    Kim Nhật Thành
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                    thanh.kim100403@hcmut.edu.vn
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <input className="text-sm border border-gray-600 text-gray-900 sm:text-lg focus:ring-blue-500 focus:border-blue-500 w-12 p-1 text-center"></input>
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">GỠ CẤM</button>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white odd:bg-blue-50">
                                                <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                    Kim Nhật Thành
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                    thanh.kim100403@hcmut.edu.vn
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <input className="text-sm border border-gray-600 text-gray-900 sm:text-lg focus:ring-blue-500 focus:border-blue-500 w-12 p-1 text-center"></input>
                                                </td>
                                                <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">GỠ CẤM</button>
                                                </td>
                                            </tr>
                                            {/* {
                                                listBlockedUser && listBlockedUser.map((user, index) => {
                                                    return (
                                                        <tr className="even:bg-white odd:bg-blue-50" key={index}>
                                                            <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                {user.name}
                                                            </td>
                                                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                                                                {user.mail}
                                                            </td>
                                                            <td class="text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                                {user.numpage}
                                                            </td>
                                                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                                                                <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">GỠ CẤM</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            } */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageStudentPage;