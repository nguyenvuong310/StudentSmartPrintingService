import HeaderAdmin from "./HeaderAdmin";
import MenuBarAdmin from "./MenuBarAdmin";
const ManagePrintingHistory = () => {
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
                                        <div class="w-full font-bold px-5 py-5 text-black-600 text-2xl">Quản lý lịch sử in</div>
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
                                        <div class="relative flex-wrap justify-between ml-auto mr-3">
                                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" class="h-8 my-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                                            <thead class="bg-white shadow-2xl">
                                                <tr>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Họ và tên
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Tài liệu
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Máy in
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Thời gian nhận
                                                    </th>
                                                    <th scope="col" class="text-lg font-bold text-gray-900 px-7 py-4 text-left">
                                                        Trạng thái
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="mt-1">
                                                <tr className="even:bg-white odd:bg-blue-50">
                                                    <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                        Kim Nhật Thành
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                        ABC
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        ĐHBK cơ sở 1, tòa A5, tầng 1
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        XX:YY:ZZZZ
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        <div className="flex bg-[#545F71] w-[8rem] border rounded-full my-2 text-white text-base px-1 py-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#50F204" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-white place-items-center ml-1 mt-1 w-4 h-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="mx-1 font-semibold">Hoàn thành</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="even:bg-white odd:bg-blue-50">
                                                    <td class="px-7 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                                                        Kim Nhật Thành
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap">
                                                        ABC
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        ĐHBK cơ sở 1, tòa A5, tầng 1
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        XX:YY:ZZZZ
                                                    </td>
                                                    <td class="text-lg text-gray-900 font-light px-7 py-4 whitespace-nowrap text-left">
                                                        <div className="flex bg-white w-[10rem] border border-gray-300 rounded-full my-2 text-white text-base px-1 py-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-[#545F71] place-items-center ml-1 mt-1 w-4 h-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="mx-1 text-[#545F71] font-semibold">Trong hàng chờ</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ManagePrintingHistory;