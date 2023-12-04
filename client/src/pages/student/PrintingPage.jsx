import React, { useState, useEffect } from "react";
import Select from "react-select";
// import Iframe from 'react-iframe'
import { render } from "react-dom";
import { useSelector } from "react-redux";
// import { Select, Option } from "@material-tailwind/react";
import {
  EnvelopeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import SelectPrinter from "./SelectPrinter";

import { getUserInfo } from "../../service/userService";
import { usePrevious } from "@material-tailwind/react";
////////////////////////////////////////////////
const PrintingPage = ({ doc, docUrl, userNumPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [numpage, setNumpage] = useState("");
  const [layout, setLayout] = useState("");
  const [pagesize, setPagesize] = useState("");
  const [pageperside, setPageperside] = useState(0);
  const [alignment, setAlignment] = useState("");
  const [scale, setScale] = useState("");
  const [copy, setCopy] = useState(0);
  const handleNumpage = (numpage) => {
    if (numpage === "all") {
      if (pagesize == "A3") return doc.numpage * 2 * copy;
      if (pagesize == "A4") return doc.numpage * 1 * copy;
      if (pagesize == "A5") return doc.numpage * 0.5 * copy;
    }
    if (numpage === "even") {
      const num = Math.floor(doc.numpage / 2);
      if (pagesize == "A3") return num * 2 * copy;
      if (pagesize == "A4") return num * 1 * copy;
      if (pagesize == "A5") return num * 0.5 * copy;
    }
    if (numpage === "odd") {
      const num = Math.ceil(doc.numpage / 2);
      if (pagesize == "A3") return num * 2 * copy;
      if (pagesize == "A4") return num * 1 * copy;
      if (pagesize == "A5") return num * 0.5 * copy;
    }
    if (typeof numpage === "string") {
      const arrayOfDevide = numpage.split(",");
      let sumnumpage = 0;
      const check = arrayOfDevide.some((element) => {
        element = element.trim();
        const array = element.split("-");
        if (array.length >= 3) {
          return true;
        }
        if (array.length == 1) {
          let num = array[0];
          if (!/^[0-9]+$/.test(num)) {
            return true;
          }
          num = Number(num);
          if (num == 0) {
            return true;
          }
          sumnumpage = sumnumpage + 1;
        }
        if (array.length == 2) {
          let num1 = array[0];
          let num2 = array[1];
          if (!/^[0-9]+$/.test(num1)) {
            return true;
          }
          if (!/^[0-9]+$/.test(num2)) {
            return true;
          }
          num1 = Number(num1);
          num2 = Number(num2);
          if (num1 > num2 || num1 == 0 || num2 == 0) {
            return true;
          }
          sumnumpage = sumnumpage + num2 - num1 + 1;
        }
        return false;
      });
      if (check) return -1;
      if (pagesize == "A3") return sumnumpage * 2 * copy;
      if (pagesize == "A4") return sumnumpage * 1 * copy;
      if (pagesize == "A5") return sumnumpage * 0.5 * copy;
    } else {
      console.error("numpage is not a string");
    }
  };

  const handleSetNumpage = (data) => {
    setNumpage(data);
  };
  const handlesetLayout = (event) => {
    setLayout(event.value);
  };
  const handlesetPagesize = (event) => {
    setPagesize(event.value);
  };
  const handlesetPageperside = (event) => {
    setPageperside(event.target.value);
  };
  const handlesetAlignment = (event) => {
    setAlignment(event.value);
  };
  const handlesetScale = (event) => {
    setScale(event.value);
  };
  const handlesetCopy = (event) => {
    setCopy(event.target.value);
  };
  useEffect(() => {}, [showModal]);

  const optionsPageN = [
    { value: "all", label: "Tất cả" },
    { value: "even", label: "Trang chẵn" },
    { value: "odd", label: "Trang lẻ" },
  ];
  const optionsLayout = [
    { value: "portrait", label: "Portrait" },
    { value: "landscape", label: "Landscape" },
  ];
  const optionsPaperS = [
    { value: "A3", label: "A3" },
    { value: "A4", label: "A4" },
    { value: "A5", label: "A5" },
  ];
  const optionsMargin = [
    { value: "default", label: "Mặc định" },
    { value: "none", label: "Bỏ qua" },
    { value: "minimum", label: "Tối thiểu" },
  ];
  const optionsScale = [
    { value: "Fit", label: "Vừa khuôn giấy" },
    { value: "Actual_size", label: "Đúng kích thước" },
  ];

  const HandleInput = (event) => {
    const input1 = document.getElementById("inputPageNum");
    const input2 = document.getElementById("inputNe");

    if (input1) {
      input1.value = "";
      setNumpage(event.value);
    }
    if (input2) {
      input2.classList.remove("brightness-75");
    }
  };

  const HandleInput2 = (event) => {
    const input1 = document.getElementById("inputPageNum");

    setNumpage(event.target.value);
    const input2 = document.getElementById("inputNe");
    if (input2) {
      input2.classList.add("brightness-75");
    }
  };
  const HandleInput3 = (event) => {
    setNumpage(event.value);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: "#9e9e9e",
      minHeight: "28px",
      height: "28px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "28px",
      padding: "0 6px",
      color: "blue",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "28px",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#608bd1" : null,

        color: "#333333",
        cursor: "pointer",
      };
    },
  };
  const handleCancel = () => {
    setShowModal(false);
    setNumpage("");
    setLayout("");
    setPagesize("");
    setPageperside(0);
    setAlignment("");
    setScale("");
    setCopy(0);
  };
  return (
    <>
      <button
        className="h-[25px] w-[75px] justify-self-center bg-[#658DF1] text-sm text-white  opacity-80  hover:scale-110
         hover:bg-white hover:text-blue-600 hover:opacity-100 hover:drop-shadow-2xl focus:ring-blue-400 active:ring active:drop-shadow-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        In
      </button>
      {showModal ? (
        <>
          {/* overflow-x-hidden overflow-y-auto */}
          <div class=" fixed inset-0  z-50 outline-none focus:outline-none ">
            <div class=" my-6  flex h-screen w-screen justify-center">
              {/*content*/}
              <div
                class="block flex h-[90%] w-[80%] min-w-fit flex-col justify-center  rounded-lg border-0 
                 bg-cus-blue shadow-lg outline-none focus:outline-none md:flex-row"
              >
                {/* PrintView */}
                <div class="flex  h-96 min-w-[400px]  flex-col items-center  bg-regal-blue md:h-full md:w-full">
                  <iframe src={docUrl} class="h-full  w-4/5 "></iframe>
                </div>
                {/* PrintConfig */}
                <div class="h-2/5 w-full flex-1 md:h-full ">
                  <div
                    class=" h-full justify-center overflow-auto
                      scrollbar-thin scrollbar-track-gray-800/40
                      scrollbar-thumb-[#a3a2a5] hover:scrollbar-thumb-[#c4c3c6] 
                      "
                  >
                    {/* Header */}
                    <div class="border-blueGray-200 sticky top-0 z-40 flex items-start rounded-t border-b border-solid bg-cus-blue p-3">
                      <h3 class="text-xl font-semibold text-white">
                        Cài đặt cấu hình in
                      </h3>
                    </div>
                    {/* Body */}
                    <nav class="flex flex-col gap-4 px-8 py-5 text-start font-sans text-base leading-tight text-white ">
                      <div class="flex flex-row items-center justify-between  gap-2 border-2 border-solid px-3  py-1.5">
                        <div>Số trang</div>
                        <div class="flex flex-col items-center">
                          <input
                            type="text"
                            name="pageNum1"
                            onChange={(event) => HandleInput2(event)}
                            id="inputPageNum"
                            class="h-7 w-32 rounded-sm px-3 text-[12px] 
                            leading-4 text-gray-900 placeholder:text-gray-400"
                            placeholder="Eg: 1-5, 8,11-13..."
                          />
                          <div>
                            <div class="mt-1  w-32  shadow-sm">
                              <div
                                id="inputNe"
                                class="h-full w-full items-center  text-[12px] "
                              >
                                <Select
                                  options={optionsPageN}
                                  id="selectPN"
                                  styles={customStyles}
                                  placeholder="Tùy chọn"
                                  isSearchable={false}
                                  onChange={(event) => HandleInput3(event)}
                                  onFocus={(event) => HandleInput(event)}
                                ></Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-1.5 ">
                        <div>Layout</div>
                        <div class="flex items-center">
                          <div class=" w-32  shadow-sm">
                            <div
                              id="pg2"
                              class="h-full w-full items-center  text-[12px]"
                            >
                              <Select
                                options={optionsLayout}
                                id="ppg"
                                backgroundcolor="#9e9e9e"
                                styles={customStyles}
                                placeholder="Tùy chọn"
                                isSearchable={false}
                                onChange={(event) => handlesetLayout(event)}
                              ></Select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-1.5 ">
                        <div>Cỡ giấy</div>
                        <div>
                          <div>
                            <div class=" w-32  shadow-sm">
                              <div
                                id="pg2"
                                class="h-full w-full items-center text-[12px]"
                              >
                                <Select
                                  options={optionsPaperS}
                                  id="ppg"
                                  backgroundcolor="#9e9e9e"
                                  styles={customStyles}
                                  placeholder="Tùy chọn"
                                  isSearchable={false}
                                  onChange={(event) => handlesetPagesize(event)}
                                ></Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-1.5 ">
                        <div class="w-28">Số trang trên một mặt</div>
                        <div>
                          <input
                            onChange={(event) => handlesetPageperside(event)}
                            type="text"
                            name="pageNum1"
                            id="pageNum1"
                            class="h-7 w-32 rounded-sm py-1 pl-3 pr-3 text-[12px] 
                          text-gray-900 placeholder:text-gray-400 sm:leading-6"
                            placeholder="Eg: 1,4,8..."
                          />
                        </div>
                      </div>

                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-1.5 ">
                        <div>Căn lề</div>
                        <div>
                          <div>
                            <div class="  w-32  shadow-sm">
                              <div
                                id="pg2"
                                class="h-full w-full items-center text-[12px]"
                              >
                                <Select
                                  options={optionsMargin}
                                  id="ppg"
                                  backgroundcolor="#9e9e9e"
                                  styles={customStyles}
                                  placeholder="Tùy chọn"
                                  isSearchable={false}
                                  onChange={(event) =>
                                    handlesetAlignment(event)
                                  }
                                ></Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-2 ">
                        <div>Tỉ lệ</div>
                        <div>
                          <div>
                            <div class="  w-36  shadow-sm">
                              <div
                                id="pg2"
                                class="h-full w-full items-center text-[12px]"
                              >
                                <Select
                                  options={optionsScale}
                                  id="ppg"
                                  backgroundcolor="#9e9e9e"
                                  styles={customStyles}
                                  placeholder="Tùy chọn"
                                  isSearchable={false}
                                  onChange={(event) => handlesetScale(event)}
                                ></Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row items-center justify-between gap-2 border-2  border-solid px-3 py-2 ">
                        <div>Số bản in</div>
                        <div>
                          <input
                            onChange={(event) => handlesetCopy(event)}
                            type="text"
                            name="pageNum1"
                            id="pageNum1"
                            class="h-7 w-32 rounded-sm py-1 pl-3 pr-3 text-[12px] 
                          leading-6 text-gray-900 placeholder:text-gray-400"
                            placeholder="Eg: 1,4,8..."
                          />
                        </div>
                      </div>
                    </nav>
                    {/* PageNum available */}
                    <div
                      class="flex  items-center p-1 font-thin italic text-white brightness-50"
                      id="pageNAvail"
                    >
                      Số trang bạn có thể in: {userNumPage}
                      <div></div>
                    </div>
                    {/*footer*/}
                    <div className="border-blueGray-200 flex  justify-end rounded-b border-t border-solid px-4 pb-4 pt-7">
                      <button
                        className="background-transparent mb-1  mr-1 px-6 py-2 text-sm font-bold uppercase 
                          text-white outline-none transition-all duration-150 ease-linear focus:outline-none"
                        type="button"
                        onClick={() => {
                          handleCancel();
                        }}
                      >
                        Hủy
                      </button>
                      <SelectPrinter
                        handleSetNumpage={handleSetNumpage}
                        numpage={userNumPage}
                        doc={doc}
                        handleNumpage={handleNumpage}
                        numpageconfig={numpage}
                        layout={layout}
                        pagesize={pagesize}
                        pageperside={pageperside}
                        alignment={alignment}
                        scale={scale}
                        copy={copy}
                        offModalPrint={handleCancel}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
export default PrintingPage;
