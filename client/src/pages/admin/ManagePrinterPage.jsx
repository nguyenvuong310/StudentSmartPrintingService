import HeaderAdmin from "./HeaderAdmin";
import AddPrinterModal from "../../components/AddPrinterModal";
import { getAllPrinter, deletePrinter } from "../../service/adminService";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManagePrinterPage = () => {
  const [listPrinter, setListPrinter] = useState([])
  useEffect(() => {
    const test = async () => {
      try {
        const printer = await getAllPrinter();
        setListPrinter(printer.data.printer)
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test()
  }, []);

  const handleActivePrinter = async (printerid) => {
    alert("Chua lam")
  }
  const handleDeletePrinter = async (id, index) => {
    const data = {
      id: id
    }
    await deletePrinter(data)
    const newList = [...listPrinter]
    newList.splice(index, 1)
    setListPrinter(newList)
    toast.success('Xóa máy in thành công', {
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
  const handleAfterAdd = async () => {
    const printer = await getAllPrinter();
    setListPrinter(printer.data.printer)
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
              <div role="button" tabindex="0" class="border-solid active border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./student-manage">Quản lý sinh viên</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 bg-gray-50 bg-opacity-80 hover:text-blue-900 focus:text-blue-900 text-blue-900 outline-none">
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
                  <div class="w-full font-bold px-5 py-5 text-black-600 text-2xl">Quản lý máy in</div>
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
                <div class="bg-white border border-b-black flex w-full">
                  <div class="relative flex-wrap justify-between ml-auto mr-3">
                    <AddPrinterModal input={handleAfterAdd} />
                  </div>
                </div>
                <div className="flex">
                  <table class="w-full round-md table-auto divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-white shadow-2xl">
                      <tr>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Tên máy in
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Địa chỉ
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Loại
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-left">
                          Bật/tắt
                        </th>
                        <th scope="col" class="text-lg font-bold text-gray-900 px-10 py-4 text-center">
                          Tùy chỉnh
                        </th>
                      </tr>
                    </thead>
                    <tbody className="mt-1">
                      {listPrinter && listPrinter.map((printer, index) => {
                        return (
                          <tr className="even:bg-white odd:bg-blue-50">
                            <td class="px-10 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                              {printer.name}
                            </td>
                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                              {printer.location}
                            </td>
                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                              {printer.type}
                            </td>
                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                              <label class="mt-3 relative inline-flex items-center cursor-pointer">

                                <input type="checkbox" value="" class="sr-only peer" onClick={() => handleActivePrinter(printer.id)}></input>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>

                              </label>
                            </td>
                            <td class="text-lg text-gray-900 font-light px-10 py-4 whitespace-nowrap text-center">
                              <div className="flex flex-row">
                                <button href="#" class="flex-row border-4 border-[#c4c4c4] bg-blue-300 px-3 py-1 text-white hover:shadow text-sm font-thin">CHỈNH SỬA</button>
                                <button href="#" class="mx-3 border-4 border-[#c4c4c4] bg-red-500 px-3 py-1 text-white hover:shadow text-sm font-thin" onClick={() => handleDeletePrinter(printer.id, index)}>XÓA</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
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

export default ManagePrinterPage;
