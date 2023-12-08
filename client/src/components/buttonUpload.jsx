import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadModal from "./UploadModal";
import { Alert, Button } from "@material-tailwind/react";
import {
    ArrowUpTrayIcon,
    ExclamationCircleIcon,
    CheckCircleIcon, XMarkIcon
} from "@heroicons/react/24/solid";
export default function ButtonUpload(props) {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const checkUpload = (flag) => {
        if (flag === true) {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)

            }, 1500);
        }
        else {
            setOpen1(true)
            setTimeout(() => {
                setOpen1(false)

            }, 1500);
        }
    }
    useEffect(() => {
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
            <UploadModal isOpen={showModal}
                toggle={toggle}
                inputupload={props.inputupload}
                upload={props.upload}
                checkUpload={checkUpload} />
            <div class="fixed z-50 top-[6rem] right-2 " id="alert">
                <Alert
                    variant="outlined"
                    open={open}
                    onClose={() => { setOpen(false) }}
                    action={
                        <Button
                            variant="text"
                            size="sm"
                            className="!absolute top-2 right-0"
                            onClick={() => setOpen(false)}
                        >
                            <XMarkIcon className="w-6" />
                        </Button>
                    }
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={< CheckCircleIcon className="w-6 text-green-500" />}
                    className="bg-white text-black w-[21rem]">
                    Upload thành công
                </Alert>
                <Alert open={open1} onClose={() => { setOpen1(false) }}
                    animate={{
                        mount: { x: 0 },
                        unmount: { x: 100 },
                    }}
                    icon={<ExclamationCircleIcon className="w-6" />}
                    className="bg-red-500 w-[21rem]">
                    Upload thất bại
                </Alert>
            </div>
            <ToastContainer />
        </>
    );
}

// export default PrintingPage;