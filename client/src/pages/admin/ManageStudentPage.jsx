import HeaderAdmin from "./HeaderAdmin";
import { useState, useEffect } from "react";
import whitefill from "../../assets/white-fill.png";
import { getAllUser, getBlockedUser, blockUser, getUserBySearch, getBlockedUserBySearch } from "../../service/adminService";
import { data } from "autoprefixer";
import { applyMiddleware } from "redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuBarAdmin from "./MenuBarAdmin";
const ManageStudentPage = () => {
    const [listUser, setListUser] = useState([]);
    const [listBlockedUser, setListBlockedUser] = useState([]);
    const [toggle, setToggle] = useState(1);
    const [searchContent, setSearchContent] = useState("")
    const [listUserBySearch, setListUserBySearch] = useState([])
    const [listBlockedUserBySearch, setListBlockedUserBySearch] = useState([])
    useEffect(() => {
        const test = async () => {
            try {
                if (listUser.length == 0) {
                    const user = await getAllUser();
                    setListUser(() => user.data.data);
                }
                if (listBlockedUser.length == 0) {
                    const blockuser = await getBlockedUser();
                    setListBlockedUser(() => blockuser.data.data);
                }
            } catch (error) {
                console.error("Error fetching user information:", error);
            }
        };

        test()
    }, []);
    const HandleBlockUser = async (userid, index) => {
        if (toggle == 1) {
            const data = {
                userid: userid
            }
            await blockUser(data)
            const updatedListUser = [...listUser];
            updatedListUser.splice(index, 1);
            setListUser(() => updatedListUser);
            const blockuser = await getBlockedUser();
            setListBlockedUser(() => blockuser.data.data);
            toast.success('Cấm thành công', {
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
        if (toggle == 3) {
            const data = {
                userid: userid
            }
            await blockUser(data)
            setListUserBySearch([])
            const user = await getAllUser();
            setListUser(() => user.data.data);
            const blockuser = await getBlockedUser();
            setListBlockedUser(() => blockuser.data.data);
        }

    }
    const HandleDeleteBlockUser = async (userid, index) => {
        if (toggle == 2) {
            const data = {
                userid: userid
            }
            await blockUser(data)
            const updatedBlockedListUser = [...listBlockedUser];
            updatedBlockedListUser.splice(index, 1);
            setListBlockedUser(updatedBlockedListUser)
            const user = await getAllUser();
            setListUser(() => user.data.data);
            toast.success('Gỡ cấm thành công', {
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
        if (toggle == 4) {
            const data = {
                userid: userid
            }
            await blockUser(data)
            console.log("Hello")
            setListBlockedUserBySearch([])
            const user = await getAllUser();
            setListUser(() => user.data.data);
            const blockuser = await getBlockedUser();
            setListBlockedUser(() => blockuser.data.data);
        }
    }

    const updateToggle = (id) => {
        setToggle(id)
    }
    const handleOnChangeSeacrhContent = async (event) => {
        if (event.key === "Enter") {
            const data = {
                content: event.target.value
            }
            if (toggle == 1 || toggle == 3) {
                let user = await getUserBySearch(data)
                setListUserBySearch(user.data.data)
                setToggle(3)
            } else {
                let user = await getBlockedUserBySearch(data)
                setListBlockedUserBySearch(user.data.data)
                setToggle(4)
            }
        }
    }
    return (
        <>
            <div className="bg-white-fill bg-cover">
                <HeaderAdmin />
                <div class="flex h-screen">
                    <div className="fixed top-0 z-20">
                        <MenuBarAdmin />
                    </div>
                    <div class="flex place-content-center w-full ml-[18rem]">
                        <div class="overflow-x-auto sm:mx-0.8 lg:mx-0.8 w-11/12">
                            <div class="py-2 pt-10 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden shadow rounded-lg">
                                    <div class="w-full flex bg-white border-2 border-b-black">
                                        <div class="w-full font-bold px-7 py-5 text-black-600 text-2xl">Quản lý sinh viên</div>
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
                                                    <button class={toggle == 1 || toggle == 3 ? "flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-black bg-white rounded-t-lg text-xl" : "flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-white focus:bg-white rounded-t-lg focus:text-black text-xl"} onClick={() => updateToggle(1)}>
                                                        <a>Danh sách sinh viên</a>
                                                    </button>
                                                </li>
                                                <li class="me-2" role="presentation">
                                                    <button class={toggle == 2 || toggle == 4 ? "flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-black bg-white rounded-t-lg text-black text-xl" : "flex flex-row font-medium px-1 py-1 mt-1 ml-1 text-white focus:bg-white rounded-t-lg focus:text-black text-xl"} onClick={() => updateToggle(2)}>
                                                        <a>Danh sách cấm</a>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="relative flex-wrap justify-between ml-auto mr-3">
                                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" class="h-8 my-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Search" required
                                                // onChange={(event) => setSearchContent(event.target.value)}
                                                onKeyDown={(event) => handleOnChangeSeacrhContent(event)}
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div class={toggle == 1 ? "flex" : "hidden"}>
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        MSSV
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Họ và tên
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Số trang khả dụng
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tùy chỉnh
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                {
                                                    listUser && listUser.map((user, index) => {
                                                        return (
                                                            <tr className="even:bg-white odd:bg-blue-50">
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.userid}
                                                                </td>
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.name}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                                    {user.mail}
                                                                </td>
                                                                <td class="text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    {user.numpage - user.numpageused}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-red-500 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => HandleBlockUser(user.userid, index)}>CẤM</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class={toggle == 3 ? "flex" : "hidden"}>
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        MSSV
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Họ và tên
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Số trang khả dụng
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tùy chỉnh
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                {
                                                    listUserBySearch && listUserBySearch.map((user, index) => {
                                                        return (
                                                            <tr className="even:bg-white odd:bg-blue-50">
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.userid}
                                                                </td>
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.name}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                                    {user.mail}
                                                                </td>
                                                                <td class="text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    {user.numpage - user.numpageused}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-red-500 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => HandleBlockUser(user.userid, index)}>CẤM</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class={toggle == 2 ? "flex" : "hidden"}>
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        MSSV
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Họ và tên
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Số trang khả dụng
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tùy chỉnh
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                {
                                                    listBlockedUser && listBlockedUser.map((user, index) => {
                                                        return (
                                                            <tr className="even:bg-white odd:bg-blue-50">
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.userid}
                                                                </td>
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.name}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                                    {user.mail}
                                                                </td>
                                                                <td class="text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    {user.numpage}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => HandleDeleteBlockUser(user.userid, index)}>GỠ CẤM</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class={toggle == 4 ? "flex" : "hidden"}>
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        MSSV
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Họ và tên
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Email
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Số trang khả dụng
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tùy chỉnh
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                {
                                                    listBlockedUserBySearch && listBlockedUserBySearch.map((user, index) => {
                                                        return (
                                                            <tr className="even:bg-white odd:bg-blue-50">
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.userid}
                                                                </td>
                                                                <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                                    {user.name}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                                    {user.mail}
                                                                </td>
                                                                <td class="text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    {user.numpage}
                                                                </td>
                                                                <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-center">
                                                                    <button href="#" class="border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => HandleDeleteBlockUser(user.userid, index)}>GỠ CẤM</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};
export default ManageStudentPage;