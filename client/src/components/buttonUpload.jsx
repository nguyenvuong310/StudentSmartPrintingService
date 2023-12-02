import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import UploadModal from "./UploadModal";

export default function ButtonUpload() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("modal", showModal);
  }, [showModal]);
  const toggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        className="active:bg-blue-700font-bold mb-1 mr-1 flex flex-row space-x-3 rounded bg-[#3563E9] 
                 px-6 py-3 text-sm uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        type="button"
        onClick={toggle}
      >
        <ArrowUpTrayIcon className="w-5" />
        Tải lên
      </button>
      <UploadModal isOpen={showModal} toggle={toggle} />
      <ToastContainer />
    </>
  );
}

// export default PrintingPage;
