import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { XCircleIcon } from "@heroicons/react/24/outline";
import CreatableSelect from "react-select/creatable";
import { uploadFile, getListCourse } from "../service/userService";
import icon_word from "../assets/icon-word.png";
import icon_pdf from "../assets/PDF_icon.svg.png";

export default function UploadModal(props) {
  const [showModal, setShowModal] = useState(props.isOpen);
  const [file, setFile] = useState(null);
  const [location, setlocation] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [listCourse, setListCourse] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const course = await getListCourse();
      await setListCourse(course.data.course);
      setShowModal(props.isOpen);
    };

    // console.log(listCourse)
    getdata();
  }, [showModal, uploaded, props.isOpen]);
  const optionsLocation = [
    { value: "private", label: "Kho cá nhân" },
    { value: "public", label: "Kho cộng đồng" },
  ];
  const optionsCourse = listCourse.map((course, index) => {
    const value = course.name;
    const label = course.name;

    return { value, label };
  });
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      await setFile(() => selectedFile);
    } else {
      setFile(null);
    }
    setUploaded(true);
  };
  const handleOnchangeLocation = async (event) => {
    await setlocation(() => event.value);
  };
  const handleOnchangeCourse = async (event) => {
    await setCourse(() => event.value);
  };
  const handleOnchangeName = async (event) => {
    await setName(() => event.target.value);
  };
  let handleUpload = async () => {
    if (!location) {
      toast.error("Chưa chọn vị trí để lưu tài liệu", {
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
    if (!course) {
      toast.error("Chưa chọn môn học", {
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
    if (!name) {
      toast.error("Chưa có tên tài liệu", {
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
    if (!file) {
      toast.error("Chưa có file để upload", {
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
    let data = {
      file: file,
      name: name,
      course: course,
      location: location,
    };
    const upload = await uploadFile(data);
    props.toggle();
    setUploaded(() => false);
    setCourse("");
    setlocation("");
    setFile(null);
    setName("");
    props.inputupload(!props.upload);
    if (upload && upload.data && upload.data.errCode === 0) {
      toast.success("Upload thành công", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Upload không thành công");
    }
  };
  const handleClose = () => {
    // setShowModal(() => false)
    props.toggle();
    setUploaded(() => false);
    setCourse("");
    setlocation("");
    setFile(null);
    setName("");
  };
  return (
    <>
      {showModal ? (
        <>
          <div class="fixed inset-0 z-50 flex w-screen justify-center outline-none focus:outline-none ">
            <div class="extraOutline bg-whtie relative m-auto w-[60%] rounded-lg bg-[#ABD7EF] p-4 shadow-xl">
              <div className="absolute right-0 top-0 m-2 h-6  w-6">
                <XCircleIcon
                  className="cursor-pointer"
                  type="button"
                  onClick={() => handleClose()}
                >
                  {" "}
                </XCircleIcon>
              </div>
              <div className="grid grid-cols-1 gap-x-20 gap-y-3 p-10 md:grid-flow-row md:grid-cols-2 md:gap-y-10">
                <div>
                  <div className="mb-2 font-bold ">
                    Chọn vị trí lưu tài liệu
                  </div>
                  <div>
                    <CreatableSelect
                      onChange={(event) => handleOnchangeLocation(event)}
                      options={optionsLocation}
                      isSearchable={false}
                      placeholder="Tùy chọn..."
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 font-bold">
                    Chọn môn học của tài liệu
                  </div>
                  <CreatableSelect
                    onChange={(event) => handleOnchangeCourse(event)}
                    options={optionsCourse}
                    isSearchable={false}
                    placeholder="Tùy chọn..."
                  />
                </div>
                <div>
                  <div className="mb-2 font-bold">Nhập tên tài liệu</div>

                  <input
                    onChange={(event) => handleOnchangeName(event)}
                    type="text"
                    class="block w-full rounded-lg border border-gray-400 p-2 ps-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Tên tài liệu..."
                  />
                </div>
              </div>
              <div class="file_upload relative rounded-lg border-4 border-dotted border-gray-300 bg-white  p-5">
                {!uploaded && (
                  <svg
                    class="mx-auto mb-4 w-24 text-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                )}
                {uploaded && file.type === "application/pdf" && (
                  <img
                    class="mx-auto mb-4 w-24 text-indigo-500"
                    src={icon_pdf}
                  />
                )}
                {uploaded &&
                  file.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
                    <img
                      class="mx-auto mb-4 w-24 text-indigo-500"
                      src={icon_word}
                    />
                  )}
                <div class="input_field mx-auto flex w-full flex-col text-center">
                  {!uploaded && (
                    <div class="title uppercase">Kéo thả đến màn hình này</div>
                  )}
                  {!uploaded && (
                    <div class="title text-500 uppercase">Hoặc</div>
                  )}
                  {uploaded && (
                    <div class="title grid w-full uppercase">
                      <p class="font-md line-clamp-2 h-fit w-[75%] justify-self-center">
                        {name}
                      </p>
                    </div>
                  )}
                  <label>
                    <input
                      class="hidden w-36 cursor-pointer text-sm"
                      type="file"
                      multiple
                      onChange={(event) => handleFileChange(event)}
                    />
                    <div class="grid w-full pt-3">
                      <div
                        class="text w-60 cursor-pointer justify-self-center rounded border border-gray-300 
                                                        bg-indigo-600 px-3 font-semibold text-white  hover:bg-indigo-500"
                      >
                        Tải lên từ máy tính
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="grid w-full pt-3">
                <button
                  onClick={() => handleUpload()}
                  type="button"
                  className="m-2 mb-1
        mr-1 items-center justify-self-end rounded-xl
        bg-blue-600  px-5
         py-1.5 text-white shadow outline-none ring-blue-400 transition-all duration-150
        ease-linear
        hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring active:bg-blue-700 active:ring"
                >
                  Tải lên
                </button>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <ToastContainer />
    </>
  );
}

// export default PrintingPage;
