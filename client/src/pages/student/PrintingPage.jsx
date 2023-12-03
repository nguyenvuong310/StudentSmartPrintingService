import React, { useState, useEffect } from "react";
import Select from 'react-select'
// import Iframe from 'react-iframe'
import { render } from "react-dom";
import { useSelector } from "react-redux";
// import { Select, Option } from "@material-tailwind/react";
import { EnvelopeIcon, ExclamationTriangleIcon, } from '@heroicons/react/24/outline'
import SelectPrinter from "./SelectPrinter";

import { getUserInfo } from "../../service/userService";
import { usePrevious } from "@material-tailwind/react";
////////////////////////////////////////////////
const PrintingPage = ({ doc, docUrl, userNumPage }) => {
  const [showModal, setShowModal] = useState(false)
  const [numpage, setNumpage] = useState("")
  const [layout, setLayout] = useState("")
  const [pagesize, setPagesize] = useState("")
  const [pageperside, setPageperside] = useState("")
  const [alignment, setAlignment] = useState("")
  const [scale, setScale] = useState("")
  const [copy, setCopy] = useState("")

  let configprint = {
    numpage: 10,
    layout: layout,
    pagesize: pagesize,
    pageperside: pageperside,
    alignment: alignment,
    scale: scale,
    copy: copy
  }
  const handlesetLayout = (event) => {
    setLayout(event.value)
    configprint.layout = event.value
  }
  const handlesetPagesize = (event) => {
    setPagesize(event.value)
    configprint.pagesize = event.value
  }
  const handlesetPageperside = (event) => {
    setPageperside(event.target.value)
    configprint.pageperside = event.target.value
  }
  const handlesetAlignment = (event) => {
    setAlignment(event.value)
    configprint.alignment = event.value
  }
  const handlesetScale = (event) => {
    setScale(event.value)
    configprint.scale = event.value
  }
  const handlesetCopy = (event) => {
    setCopy(event.target.value)
    configprint.copy = event.target.value
  }
  useEffect(() => { }, [showModal]);


  const optionsPageN = [
    { value: 'all', label: 'Tất cả' },
    { value: 'even', label: 'Trang chẵn' },
    { value: 'odd', label: 'Trang lẻ' }
  ]
  const optionsLayout = [
    { value: 'portrait', label: 'Portrait' },
    { value: 'landscape', label: 'Landscape' },
  ]
  const optionsPaperS = [
    { value: 'A4', label: 'A4' },
    { value: 'A3', label: 'A3' },
  ]
  const optionsMargin = [
    { value: 'default', label: 'Mặc định' },
    { value: 'none', label: 'Bỏ qua' },
    { value: 'minimum', label: 'Tối thiểu' }
  ]
  const optionsScale = [
    { value: 'Fit', label: 'Vừa khuôn giấy' },
    { value: 'Actual_size', label: 'Đúng kích thước' },
  ]

  const HandleInput = (event) => {
    const input1 = document.getElementById("inputPageNum")
    const input2 = document.getElementById("inputNe")

    if (input1) {
      input1.value = ""
      setNumpage(event.value)
    }
    if (input2) {
      input2.classList.remove("brightness-75")
    }

  }

  const HandleInput2 = (event) => {
    const input1 = document.getElementById("inputPageNum")

    setNumpage(event.target.value)
    const input2 = document.getElementById("inputNe")
    if (input2) {
      input2.classList.add("brightness-75")
    }

  }
  const HandleInput3 = (event) => {
    setNumpage(event.value)
  }

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: '#9e9e9e',
      minHeight: '28px',
      height: '28px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '28px',
      padding: '0 6px',
      color: 'blue'
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '28px',
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

  const offModalPrint = () => {
    setShowModal(false)
  }

  return (
    <>

      <button
        className="text-white text-sm bg-[#658DF1] w-[75px] h-[25px] hover:scale-110  justify-self-center  opacity-80
        hover:bg-white hover:text-blue-600 hover:drop-shadow-2xl hover:opacity-100 active:drop-shadow-none active:ring focus:ring-blue-400"
        type="button"
        onClick={() => setShowModal(true)}
      >
        In
      </button>
      {
        showModal ? (
          <>
            {/* overflow-x-hidden overflow-y-auto */}
            <div class=" fixed inset-0 z-50 fixed outline-none focus:outline-none ">
              <div class=" my-7  flex justify-center w-screen h-screen">
                {/*content*/}
                <div class="border-0 h-full max-h-[90%] w-[80%] min-w-fit flex flex-col bg-cus-blue  rounded-lg shadow-lg 
                 md:flex-row block outline-none focus:outline-none justify-center" >

                  {/* PrintView */}
                  <div class="bg-regal-blue  md:h-full h-96  md:w-full min-w-[400px]  flex flex-col items-center">
                    <iframe src={docUrl}
                      class="h-full  w-4/5 "  >

                    </iframe>
                  </div>
                  {/* PrintConfig */}
                  <div class="md:h-full w-fit flex flex-1  h-2/5 ">

                    <div class=" h-full w-max flex flex-col overflow-auto justify-center
                      scrollbar-thin scrollbar-thumb-[#a3a2a5]
                      scrollbar-track-gray-800/40 hover:scrollbar-thumb-[#c4c3c6] 
                      ">

                      {/* Header */}
                      <div class="flex sticky top-0 z-40 bg-cus-blue items-start p-3 border-b border-solid  rounded-t">
                        <h3 class="text-white text-xl font-semibold">
                          Cài đặt cấu hình in
                        </h3>
                      </div>
                      {/* Body */}
                      <nav class="flex  flex-1 flex-col gap-4 pt-5 px-8 font-sans text-start text-base text-white leading-tight ">

                        <div class="flex flex-row items-center justify-between  py-1.5 px-3 border-solid border-2  gap-2">
                          <div>
                            Số trang
                          </div>
                          <div class="flex flex-col items-center">
                            <input type="text" name="pageNum1"
                              onChange={(event) => HandleInput2(event)} id="inputPageNum" class="w-32 h-7 rounded-sm px-3 text-gray-900 
                            placeholder:text-gray-400 text-[12px] leading-4" placeholder="Eg: 1-5, 8,11-13..." />
                            <div >
                              <div class="mt-1  w-32  shadow-sm">
                                <div id="inputNe" class="h-full w-full text-[12px]  items-center ">
                                  <Select
                                    options={optionsPageN}
                                    id="selectPN"
                                    styles={customStyles}
                                    placeholder='Tùy chọn'
                                    isSearchable={false}
                                    onChange={(event) => HandleInput3(event)}
                                    onFocus={(event) => HandleInput(event)}

                                  >
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-row items-center justify-between py-1.5 px-3  gap-2 border-solid border-2 ">
                          <div>
                            Layout
                          </div>
                          <div class="flex items-center">

                            <div class=" w-32  shadow-sm">
                              <div id="pg2" class="h-full w-full text-[12px]  items-center">
                                <Select options={optionsLayout} id="ppg" backgroundcolor='#9e9e9e'
                                  styles={customStyles}
                                  placeholder='Tùy chọn'
                                  isSearchable={false}
                                  onChange={(event) => handlesetLayout(event)}
                                >
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-row items-center justify-between py-1.5 px-3  gap-2 border-solid border-2 ">
                          <div>
                            Cỡ giấy
                          </div>
                          <div>
                            <div>
                              <div class=" w-32  shadow-sm">
                                <div id="pg2" class="h-full w-full text-[12px] items-center">
                                  <Select options={optionsPaperS} id="ppg" backgroundcolor='#9e9e9e'
                                    styles={customStyles}
                                    placeholder='Tùy chọn'
                                    isSearchable={false}
                                    onChange={(event) => handlesetPagesize(event)}
                                  >
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-row items-center justify-between py-1.5 px-3  gap-2 border-solid border-2 ">
                          <div class='w-28'>
                            Số trang trên một mặt
                          </div>
                          <div>
                            <input onChange={(event) => handlesetPageperside(event)} type="text" name="pageNum1" id="pageNum1" class="w-32 h-7 rounded-sm py-1 pl-3 pr-3 text-gray-900 
                          placeholder:text-gray-400 text-[12px] sm:leading-6" placeholder="Eg: 1,4,8..." />
                          </div>
                        </div>

                        <div class="flex flex-row items-center justify-between py-1.5 px-3  gap-2 border-solid border-2 ">
                          <div>
                            Căn lề
                          </div>
                          <div>
                            <div>
                              <div class="  w-32  shadow-sm">
                                <div id="pg2" class="h-full w-full text-[12px] items-center">
                                  <Select
                                    options={optionsMargin} id="ppg" backgroundcolor='#9e9e9e'
                                    styles={customStyles}
                                    placeholder='Tùy chọn'
                                    isSearchable={false}
                                    onChange={(event) => handlesetAlignment(event)}
                                  >
                                  </Select>
                                </div>
                              </div>
                            </div >
                          </div >
                        </div >

                        <div class="flex flex-row items-center justify-between py-2 px-3  gap-2 border-solid border-2 ">
                          <div>
                            Tỉ lệ
                          </div>
                          <div>
                            <div>
                              <div class="  w-36  shadow-sm">
                                <div id="pg2" class="h-full w-full text-[12px] items-center">
                                  <Select options={optionsScale} id="ppg" backgroundcolor='#9e9e9e'
                                    styles={customStyles}
                                    placeholder='Tùy chọn'
                                    isSearchable={false}
                                    onChange={(event) => handlesetScale(event)}
                                  >
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row items-center justify-between py-2 px-3  gap-2 border-solid border-2 ">
                          <div>
                            Số bản in
                          </div>
                          <div>
                            <input onChange={(event) => handlesetCopy(event)} type="text" name="pageNum1" id="pageNum1" class="w-32 rounded-sm h-7 py-1 pl-3 pr-3 text-gray-900 
                          placeholder:text-gray-400 text-[12px] leading-6" placeholder="Eg: 1,4,8..." />
                          </div>
                        </div>
                        {/* PageNum available */}
                        <div class="flex pt-5 items-center italic font-thin text-white brightness-50" id='pageNAvail'>
                          Số trang bạn có thể in: {userNumPage}
                          <div>
                          </div>
                        </div>
                      </nav >

                      {/*footer*/}
                      < div className="flex justify-end  py-3  px-4 border-t border-solid border-blueGray-200 rounded-b" >

                        <button
                          className="text-white background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none 
                          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false)
                          }}
                        >
                          Hủy
                        </button>
                        <SelectPrinter doc={doc} configprint={configprint} offModalPrint={offModalPrint} />
                      </div >
                    </div >
                  </div >


                </div >
              </div >
            </div >

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null
      }
    </>
  );
}
export default PrintingPage;