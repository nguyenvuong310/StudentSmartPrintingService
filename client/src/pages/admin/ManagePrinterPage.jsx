import HeaderAdmin from "./HeaderAdmin";
import AddPrinterModal from "../../components/AddPrinterModal";
import {
  getAllPrinter,
  deletePrinter,
  activePrinter,
} from "../../service/adminService";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import UpdatePrinterModal from "../../components/UpdatePrinterModal";
import "react-toastify/dist/ReactToastify.css";
import MenuBarAdmin from "./MenuBarAdmin";
const ManagePrinterPage = () => {
  const [listPrinter, setListPrinter] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    const test = async () => {
      try {
        const printer = await getAllPrinter();
        setListPrinter(printer.data.printer);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test();
  }, []);

  const handleActivePrinter = async (id) => {
    const data = {
      id: id,
    };
    await activePrinter(data);
    const printer = await getAllPrinter();
    setListPrinter(printer.data.printer);
  };
  const handleDeletePrinter = async (id, index) => {
    const data = {
      id: id,
    };
    await deletePrinter(data);
    const newList = [...listPrinter];
    newList.splice(index, 1);
    setListPrinter(newList);
    toast.success("Xóa máy in thành công", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleAfterAdd = async () => {
    const printer = await getAllPrinter();
    setListPrinter(printer.data.printer);
  };
  const handleAfterUpdate = async () => {
    const printer = await getAllPrinter();
    setListPrinter(printer.data.printer);
  };
  return (
    <>
      <div className="bg-white-fill bg-cover">
        <HeaderAdmin />
        <div class="flex h-screen">
          <div className="fixed top-0 z-20">
            <MenuBarAdmin />
          </div>
          <div class="ml-[18rem] flex w-full place-content-center">
            <div class="sm:mx-0.8 lg:mx-0.8 w-11/12 overflow-x-auto">
              <div class="inline-block min-w-full py-2 pt-10 sm:px-6 lg:px-8">
                <div class="overflow-hidden rounded-lg shadow">
                  <div class="flex w-full border-2 border-b-black bg-white">
                    <div class="text-black-600 w-full px-5 py-5 text-2xl font-bold">
                      Quản lý máy in
                    </div>
                    <div className="text-medium flex cursor-pointer items-center px-4 pt-1 font-medium leading-none">
                      <div class="flex">
                        <a href="/homepage-admin">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-full border border-b-black bg-white">
                    <div class="relative ml-auto mr-3 flex-wrap justify-between">
                      <AddPrinterModal input={handleAfterAdd} />
                    </div>
                  </div>
                  <div className="flex">
                    <table class="round-md w-full table-auto divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-white shadow-2xl">
                        <tr>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Tên máy in
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Địa chỉ
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Loại
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Bật/tắt
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-center text-lg font-bold text-gray-900"
                          >
                            Tùy chỉnh
                          </th>
                        </tr>
                      </thead>
                      <tbody className="mt-1">
                        {listPrinter &&
                          listPrinter.map((printer, index) => {
                            return (
                              <tr className="odd:bg-blue-50 even:bg-white">
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {printer.name}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {printer.location}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                  {printer.type}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                  <label class="relative inline-flex cursor-pointer items-center">
                                    <input
                                      type="checkbox"
                                      class="peer sr-only"
                                      defaultChecked={
                                        printer.status ? true : false
                                      }
                                      onChange={() =>
                                        handleActivePrinter(printer.id)
                                      }
                                    ></input>
                                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                                  </label>
                                </td>
                                <td class="whitespace-nowrap py-4 text-center text-lg font-light text-gray-900">
                                  <div className="flex-row">
                                    <UpdatePrinterModal
                                      printerId={printer.id}
                                      printerName={printer.name}
                                      printerLocation={printer.location}
                                      printerType={printer.type}
                                      input={handleAfterAdd}
                                    />
                                    <button
                                      href="#"
                                      class="mx-3 border-4 border-[#c4c4c4] bg-red-500 px-3 py-1 text-sm font-thin text-white hover:shadow"
                                      onClick={() =>
                                        handleDeletePrinter(printer.id, index)
                                      }
                                    >
                                      XÓA
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
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
export default ManagePrinterPage;
