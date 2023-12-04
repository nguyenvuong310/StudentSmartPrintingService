import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import UploadModal from "./UploadModal";

export default function ButtonUpload(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // console.log("modal", showModal);
  }, []);
  const toggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        className="mb-1 mr-1 flex items-center rounded bg-[#3563E9] py-[11px]
                 pl-4 pr-5 text-sm font-semibold uppercase text-white shadow outline-none ring-blue-400 transition-all duration-150
                 ease-linear
                 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring active:bg-blue-700 active:ring
                 "
        type="button"
        onClick={toggle}
      >
        <ArrowUpTrayIcon className="mr-1 w-6" />
        Tải lên
      </button>
      <UploadModal
        isOpen={showModal}
        toggle={toggle}
        inputupload={props.inputupload}
        upload={props.upload}
      />
      <ToastContainer />
    </>
  );
}

// export default PrintingPage;
