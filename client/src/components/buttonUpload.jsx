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
                className="bg-[#3563E9] flex text-white active:bg-blue-700 font-semibold uppercase text-sm
                 pr-5 pl-4 py-[11px] rounded shadow hover:bg-blue-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1
                 items-center
                 ease-linear transition-all duration-150 active:ring ring-blue-400 focus:ring
                 "
                type="button"
                onClick={toggle}
            >
                <ArrowUpTrayIcon className="w-6 mr-1" />
                Tải lên
            </button>
            <UploadModal isOpen={showModal} toggle={toggle} inputupload={props.inputupload} upload={props.upload} />
            <ToastContainer />
        </>
    );
}


