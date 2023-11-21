import HeaderAdmin from "./HeaderAdmin";
import whitefill from "../../assets/white-fill.png";
const ManageStudentPage = () => {
    return (
        <>
            <HeaderAdmin />

            <div class="flex bg-white-fill mt-1">
                <div class="bg-blue-500 flex-col w-full max-w-[17rem] rounded-r-xl">
                    <div class="relative flex flex-col  bg-blue-800 text-white h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
                        <div class="mb-2 p-4">
                            <h5 class="block antialiased tracking-normal font-sans text-4xl font-bold leading-snug ">MENU</h5>
                        </div>
                        <nav class="flex flex-col gap-1 min-w-[220px] p-2 font-sans text-base text-xl ">
                            <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    Quản lý sinh viên
                                </div>
                            </div>
                            <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    Quản lí máy in
                                </div>
                            </div>
                            <div role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <div class="grid place-items-center mr-4">
                                    Quản lí lịch sử in
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>
                <div class="flex place-content-center w-full">
                    <div class="overflow-x-auto sm:mx-0.8 lg:mx-0.8">
                        <div class="py-2 pt-20 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="bg-white border-b">
                                        <tr>
                                            <th scope="col" class="text-medium font-bold text-gray-900 px-6 py-4 text-left">
                                                Họ và tên
                                            </th>
                                            <th scope="col" class="text-medium font-bold text-gray-900 px-6 py-4 text-left">
                                                Email
                                            </th>
                                            <th scope="col" class="text-medium font-bold text-gray-900 px-6 py-4 text-left">
                                                Số trang khả dụng
                                            </th>
                                            <th scope="col" class="text-medium font-bold text-gray-900 px-6 py-4 text-left">
                                                Tùy chỉnh
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                                </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100 border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-medium font-medium text-gray-900">
                                                Kim Nhật Thành
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                thanh.kim100403@hcmut.edu.vn
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                56
                                            </td>
                                            <td class="text-medium text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                                Cấm
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ManageStudentPage;
