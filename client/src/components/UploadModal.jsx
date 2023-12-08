import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    ArrowUpTrayIcon,
    EnvelopeIcon, ExclamationTriangleIcon,
    DocumentArrowUpIcon,
    XCircleIcon,
    ExclamationCircleIcon,
    CheckCircleIcon, XMarkIcon
} from "@heroicons/react/24/outline";
import SelectR from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { uploadFile, getListCourse } from "../service/userService";
import icon_word from "../assets/icon-word.png";
import icon_pdf from "../assets/PDF_icon.svg.png";
import { Spinner } from "@material-tailwind/react";
import ReactDOM from 'react-dom/client';
import { Alert, Button } from "@material-tailwind/react";

export default function UploadModal(props) {
    const [showModal, setShowModal] = useState(props.isOpen);
    const [file, setFile] = useState(null)
    const [location, setlocation] = useState("")
    const [course, setCourse] = useState("")
    const [name, setName] = useState("")
    const [uploaded, setUploaded] = useState(false)
    const [listCourse, setListCourse] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    useEffect(() => {
        const check = async () => {
            setLoading(false)
        }

        check()
    }, []);
    useEffect(() => {
        const getdata = async () => {
            const course = await getListCourse();
            await setListCourse(course.data.course)
            setShowModal(props.isOpen);
        }

        // console.log(listCourse)
        getdata()
    }, [showModal, uploaded, props.isOpen]);
    const optionsLocation = [
        { value: 'private', label: 'Kho cá nhân' },
        { value: 'public', label: 'Kho cộng đồng' },
    ]
    const optionsCourse = listCourse.map((course, index) => {
        const value = course.name;
        const label = course.name;

        return { value, label };
    })
    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile) {
            await setFile(() => selectedFile)
        } else {
            setFile(null)
        }
        setUploaded(true)
    }
    const handleOnchangeLocation = async (event) => {
        await setlocation(() => event.value)
    }
    const handleOnchangeCourse = async (event) => {
        await setCourse(() => event.value)
    }
    const handleOnchangeName = async (event) => {
        await setName(() => event.target.value)
    }
    let handleUpload = async () => {
        if (!location) {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 2000);
            return
        }
        if (!course) {
            setOpen1(true)
            setTimeout(() => {
                setOpen1(false)
            }, 2000);
            return
        }
        if (!name) {
            setOpen2(true)
            setTimeout(() => {
                setOpen2(false)
            }, 2000);
            return
        }
        if (!file) {
            setOpen3(true)
            setTimeout(() => {
                setOpen3(false)
            }, 2000);
            return
        }
        let data = {
            file: file,
            name: name,
            course: course,
            location: location,
        }
        setLoading(true)
        ReactDOM.createRoot(document.getElementById('upLoadBtn')).render(
            <>
                <div class="flex gap-2 items-center">
                    <Spinner color="indigo" className="h-5 w-5 text-white" /> Loading...
                </div>
            </>
        )
        const upload = await uploadFile(data)
        setLoading(false)

        props.toggle()
        setUploaded(() => false)
        setCourse("")
        setlocation("")
        setFile(null)
        setName("")
        props.inputupload(!props.upload)
        if (upload && upload.data && upload.data.errCode === 0) {
            props.checkUpload(true)
            // toast.success('Upload thành công', {
            //     position: "bottom-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // })
        } else {
            // toast.error("Upload không thành công");
            props.checkUpload(true)

        }

    }
    const handleClose = () => {
        // setShowModal(() => false)
        props.toggle()
        setUploaded(() => false)
        setCourse("")
        setlocation("")
        setFile(null)
        setName("")
    }
    return (
        <>

            {showModal ? (
                <>

                    <div class="justify-center flex fixed inset-0 z-50 outline-none w-screen focus:outline-none ">
                        <div class="fixed z-50 top-10 right-2 " id="alert">
                            <Alert open={open} onClose={() => { setOpen(false) }}
                                animate={{
                                    mount: { x: 0 },
                                    unmount: { x: 100 },
                                }}
                                icon={<ExclamationCircleIcon className="w-6" />}
                                className="bg-red-500 w-[21rem]">
                                Chưa chọn vị trí lưu tài liệu
                            </Alert>
                            <Alert open={open1} onClose={() => { setOpen1(false) }}
                                animate={{
                                    mount: { x: 0 },
                                    unmount: { x: 100 },
                                }}
                                icon={<ExclamationCircleIcon className="w-6" />}
                                className="bg-red-500 w-[21rem]">
                                Chưa chọn môn học
                            </Alert>
                            <Alert open={open2} onClose={() => { setOpen2(false) }}
                                animate={{
                                    mount: { x: 0 },
                                    unmount: { x: 100 },
                                }}
                                icon={<ExclamationCircleIcon className="w-6" />}
                                className="bg-red-500 w-[21rem]">
                                Chưa nhập tên tài liệu
                            </Alert>
                            <Alert open={open3} onClose={() => { setOpen3(false) }}
                                animate={{
                                    mount: { x: 0 },
                                    unmount: { x: 100 },
                                }}
                                icon={<ExclamationCircleIcon className="w-6" />}
                                className="bg-red-500 w-[21rem]">
                                Chưa có file để upload
                            </Alert>
                        </div>

                        <div class="extraOutline w-[60%] relative p-4 bg-[#ABD7EF] bg-whtie m-auto rounded-lg shadow-xl">
                            <div className="w-6 h-6 absolute top-0 right-0  m-2">
                                <XCircleIcon className="cursor-pointer" type="button"
                                    onClick={() => handleClose()}> </XCircleIcon>
                            </div>
                            <div className="grid md:grid-cols-2 md:grid-flow-row grid-cols-1 gap-x-20 md:gap-y-10 gap-y-3 p-10">
                                <div>
                                    <div className="font-bold mb-2 ">
                                        Chọn vị trí lưu tài liệu
                                    </div>
                                    <div>
                                        <CreatableSelect onChange={(event) =>
                                            handleOnchangeLocation(event)}
                                            options={optionsLocation}
                                            isSearchable={false}
                                            placeholder='Tùy chọn...' />
                                    </div>
                                </div>

                                <div>
                                    <div className="font-bold mb-2">
                                        Chọn môn học của tài liệu
                                    </div>
                                    <CreatableSelect onChange={(event) => handleOnchangeCourse(event)}
                                        options={optionsCourse}
                                        isSearchable={false}
                                        placeholder='Tùy chọn...'
                                    />
                                </div>
                                <div>
                                    <div className="font-bold mb-2">
                                        Nhập tên tài liệu
                                    </div>

                                    <input onChange={(event) => handleOnchangeName(event)} type="text" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tên tài liệu..." />
                                </div>
                            </div>
                            <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg  bg-white">
                                {!uploaded && <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>}
                                {uploaded && file.type === "application/pdf" && <img class="text-indigo-500 w-24 mx-auto mb-4" src={icon_pdf} />}
                                {uploaded && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
                                    <img class="text-indigo-500 w-24 mx-auto mb-4" src={icon_word} />}
                                <div class="input_field flex flex-col w-full mx-auto text-center">
                                    {!uploaded && <div class="title uppercase">Kéo thả đến màn hình này</div>}
                                    {!uploaded && <div class="title text-500 uppercase">Hoặc</div>}
                                    {uploaded && <div class="title uppercase grid w-full">
                                        <p class="w-[75%] line-clamp-2 h-fit font-md justify-self-center">
                                            {name}
                                        </p>
                                    </div>}
                                    <label>
                                        <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple onChange={(event) => handleFileChange(event)} />
                                        <div class="pt-3 w-full grid">
                                            <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold 
                                                        cursor-pointer w-60 px-3 justify-self-center  hover:bg-indigo-500">
                                                Tải lên từ máy tính
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class='pt-3 grid w-full'>

                                <button id="upLoadBtn" onClick={() => handleUpload()} disabled={loading} type="button" className="enabled:bg-blue-600 justify-self-end rounded-xl m-2 px-5 py-1.5
                                        text-white  enabled:active:bg-blue-700 shadow enabled:hover:bg-blue-700 enabled:hover:shadow-lg outline-none 
                                        enabled:focus:outline-none mr-1 mb-1
                                        items-center ease-linear transition-all duration-150 enabled:active:ring ring-blue-400 enabled:focus:ring
                                        disabled:bg-blue-400">
                                    Tải lên
                                </button>
                            </div>

                        </div>
                    </div >

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
            <ToastContainer />
        </>
    );
}



// export default PrintingPage;