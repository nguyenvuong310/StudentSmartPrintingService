import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddPrinter } from "../service/adminService";
export default function AddPrinterModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleOnChangeType = (event) => {
    setType(event.value);
  };
  const optionsType = [
    { value: "In thường", label: "In thường" },
    { value: "In màu", label: "In màu" },
  ];
  const handleAddPrinter = async () => {
    if (!name) {
      toast.error("Chưa nhập tên máy in", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!location) {
      toast.error("Chưa nhập địa chỉ máy in", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!type) {
      toast.error("Chưa chọn loại máy in", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    const data = {
      name: name,
      location: location,
      type: type,
    };
    await AddPrinter(data);
    setShowModal(false);
    setName("");
    setLocation("");
    setType("");
    props.input();
    toast.success("Thêm máy in thành công", {
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
  const handleCanel = () => {
    setShowModal(false);
    setName("");
    setLocation("");
    setType("");
  };
  return (
    <>
      <button
        className="my-2 flex rounded-lg border bg-[#7FB519] px-1 py-1 text-sm text-white"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="h-6 w-6 place-items-center text-[#7FB519]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="mt-1">Thêm máy in</span>
      </button>
      {showModal ? (
        <>
          <div class="fixed inset-0 z-50 flex justify-center outline-none focus:outline-none ">
            <div class="extraOutline relative m-auto h-[33rem] w-[30rem] rounded-lg bg-white p-4">
              <div class="flex w-full border-b-2 border-b-gray-500 bg-white">
                <div class="text-black-600 w-full px-3 py-3 text-2xl font-bold">
                  Nhập thông tin máy in
                </div>
                <div className="text-medium flex cursor-pointer items-center px-4 pt-1 font-medium leading-none">
                  <div class="flex">
                    <button onClick={() => handleCanel()}>
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
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-5 mt-8 flex-col">
                <div>
                  <div className="mb-2 text-xl">Tên</div>
                  <input
                    onChange={(event) => handleOnChangeName(event)}
                    type="text"
                    class="text-medium block h-14 w-full rounded-lg border border-gray-400 p-2 ps-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mt-5">
                  <div className="mb-2 text-xl">Địa chỉ của máy</div>
                  <input
                    onChange={(event) => handleOnChangeLocation(event)}
                    type="text"
                    class="text-medium block h-14 w-full rounded-lg border border-gray-400 p-2 ps-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="mt-5">
                  <div className="mb-2 text-xl">Loại máy</div>
                  <CreatableSelect
                    onChange={(event) => handleOnChangeType(event)}
                    options={optionsType}
                  />
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => handleAddPrinter()}
                  type="button"
                  className="absolute bottom-0 right-0 m-5 w-20 bg-[#3563E9] p-1 text-white"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
// export default PrintingPage;
