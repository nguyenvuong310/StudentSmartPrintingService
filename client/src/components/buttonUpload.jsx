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
                className="bg-[#3563E9] md:w-full w-[50px] h-[50px] grid grid-flow-col gap-1 auto-cols-max place-items-center text-white active:bg-blue-700 font-semibold uppercase text-sm
                 px-3 md:rounded rounded-full shadow hover:bg-blue-700 hover:shadow-lg outline-none focus:outline-none
                 items-center
                 ease-linear transition-all duration-150 active:ring ring-blue-400 focus:ring
                 "
                type="button"
                onClick={toggle}
            >
                <ArrowUpTrayIcon className="w-[25px] self-center " />
                <div class='md:block hidden'>
                    Tải lên
                </div>

            </button>
            <UploadModal isOpen={showModal} toggle={toggle} inputupload={props.inputupload} upload={props.upload} />
            <ToastContainer />
        </>
    );
}

// export default PrintingPage;