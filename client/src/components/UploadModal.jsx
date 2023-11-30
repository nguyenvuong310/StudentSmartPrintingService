import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {
    LockClosedIcon

} from "@heroicons/react/24/outline";
import SelectR from 'react-select'
import CreatableSelect from 'react-select/creatable';
import { uploadFile, getListCourse } from "../service/userService";
import icon_word from "../assets/icon-word.png";
import icon_pdf from "../assets/PDF_icon.svg.png";

export default function UploadModal() {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState({})
    const [location, setlocation] = useState("")
    const [course, setCourse] = useState("")
    const [name, setName] = useState("")
    const [uploaded, setUploaded] = useState(false)
    const [listCourse, setListCourse] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const course = await getListCourse();
            await setListCourse(course.data.course)
        }

        // console.log(listCourse)
        getdata()
    }, [file, location, course, name, showModal, uploaded]);
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
        await setFile(() => event.target.files[0])
        await setUploaded(() => true)
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
        let data = {
            file: file,
            name: name,
            course: course,
            location: location
        }
        const upload = await uploadFile(data)
        setShowModal(() => false)
        if (upload && upload.data.errCode === 0) {
            toast.success('Upload thành công', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } else {
            toast.error("error!!!");
        }
    }
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm 
                px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Tải lên
            </button>
            {showModal ? (
                <>
                    <div class="justify-center flex fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div class="extraOutline relative w-[45rem] p-4 bg-[#ABD7EF] bg-whtie m-auto rounded-lg">
                            <div className="w-6 h-6 absolute top-0 right-0 rounded-full border-2 border-blue-700 m-2">
                                <button className="pl-[5.5px]" type="button"
                                    onClick={() => setShowModal(false)}>
                                    X
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-6 my-5">
                                <div>
                                    Chọn vị trí lưu tệp
                                </div>

                                <div className="font-bold mb-2">
                                    <CreatableSelect onChange={(event) => handleOnchangeLocation(event)} options={optionsLocation} />
                                </div>
                                <div>
                                    <div className="font-bold mb-2">
                                        Chọn môn học của tệp
                                    </div>
                                    <CreatableSelect onChange={(event) => handleOnchangeCourse(event)} options={optionsCourse} />
                                </div>
                                <div>
                                    <div className="font-bold mb-2">
                                        Nhập tên tệp
                                    </div>

                                    <input onChange={(event) => handleOnchangeName(event)} type="text" class="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tên tài liệu..." />
                                </div>
                            </div>
                            <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg mb-9 bg-white">
                                {!uploaded && <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>}
                                {uploaded && file.type === "application/pdf" && <img class="text-indigo-500 w-24 mx-auto mb-4" src={icon_pdf} />}
                                {uploaded && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && <img class="text-indigo-500 w-24 mx-auto mb-4" src={icon_word} />}
                                <div class="input_field flex flex-col w-max mx-auto text-center">
                                    {!uploaded && <div class="title uppercase">Kéo thả đến màn hình này</div>}
                                    {!uploaded && <div class="title text-500 uppercase">Hoặc</div>}
                                    {uploaded && <div class="title uppercase">{name}</div>}
                                    <label>
                                        <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple onChange={(event) => handleFileChange(event)} />
                                        <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Tải lên từ máy tính</div>
                                    </label>
                                </div>
                            </div>
                            <button onClick={() => handleUpload()} type="button" className="bg-[#658DF1] p-1 rounded-xl w-20 m-2 absolute bottom-0 right-0 text-white">
                                Tải lên
                            </button>
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