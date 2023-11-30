import HeaderAdmin from "./HeaderAdmin";

const ManagePrintingHistory = () => {
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
              <div role="button" tabindex="0" class="border-solid active border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./student-manage">Quản lý sinh viên</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./printer-manage">Quản lý máy in</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 bg-gray-50 bg-opacity-80 hover:text-blue-900 focus:text-blue-900 text-blue-900 outline-none">
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
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Họ và tên
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Tài liệu
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Máy in
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Thời gian nhận
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-center">
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody className="mt-1">
                      <tr className="even:bg-white odd:bg-blue-50">
                        <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                          Kim Nhật Thành
                        </td>
                        <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">

                        </td>
                        <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                          ĐHBK cơ sở 1, tòa A5, tầng 1
                        </td>
                        <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                        </td>
                        <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
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
    </>
  )
};

export default ManagePrintingHistory;
