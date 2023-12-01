import React, { useState, useEffect } from "react";
import Select from 'react-select'
// import Iframe from 'react-iframe'
import { render } from "react-dom";
import { useSelector } from "react-redux";
// import { Select, Option } from "@material-tailwind/react";
import { ExclamationTriangleIcon, } from '@heroicons/react/24/outline'
import SelectPrinter from "./SelectPrinter";

import { getUserInfo } from "../../service/userService";
import { usePrevious } from "@material-tailwind/react";
////////////////////////////////////////////////
const PrintingPage = (docUrl) => {

  const [userinfo, setUserinfo] = useState({});
  useEffect(() => {
    const test = async () => {
      try {
        const data = await getUserInfo();
        setUserinfo(data.data.user)
      }
      catch (error) {
        console.error("Error fetching user infomation", error);
      }
    };
    test()
  }, []);




  const [showModal, setShowModal] = React.useState(false);

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
  const [user, setUser] = useState({
    pNum: '1'
  });

  const HandleInput = () => {
    const input1 = document.getElementById("inputPageNum")
    const input2 = document.getElementById("pg2")

    if (input1) {
      input1.value = ""
      setUser(previousSate => {
        return { ...previousSate, pNum: input1.value }
      })
    }
    if (input2) {
      input2.classList.remove("brightness-75")
    }

  }

  const HandleInput2 = () => {
    const input1 = document.getElementById("inputPageNum")

    setUser(previousSate => {
      return { ...previousSate, pNum: input1.value }
    })
    const input2 = document.getElementById("pg2")
    if (input2) {
      input2.classList.add("brightness-75")
    }

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


  return (
    <>

      <button
        className="text-white bg-[#658DF1] w-[90px] h-[30px] ml-[30%] opacity-70"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Print
      </button>
      {
        showModal ? (
          <>
            {/* overflow-x-hidden overflow-y-auto */}
            <div class=" flex fixed  inset-y-2 z-50 outline-none focus:outline-none ">
              <div class=" my-6  flex justify-center  w-screen ">
                {/*content*/}
                <div class="border-0 h-full w-4/5 min-w-fit flex flex-col bg-cus-blue  rounded-lg shadow-lg 
                 md:flex-row block outline-none focus:outline-none " >

                  {/* PrintView */}
                  <div class="bg-regal-blue  md:h-full h-96  md:w-full min-w-[400px]  flex flex-col items-center">
                    <iframe src={docUrl.docUrl}
                      class="h-full  w-4/5 "  >

                    </iframe>
                  </div>
                  {/* PrintConfig */}
                  <div class="md:h-full w-full flex-1 h-2/5 ">

                    <div class=" h-full overflow-auto justify-center">

                      {/* Header */}
                      <div class="flex sticky top-0 z-40 bg-cus-blue items-start p-3 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 class="text-white text-xl font-semibold">
                          Cài đặt cấu hình in
                        </h3>
                      </div>
                      {/* Body */}
                      <nav class="flex flex-col gap-4 py-5 px-8 font-sans text-start text-base text-white leading-tight ">

                        <div class="flex flex-row items-center justify-between  py-1.5 px-3 border-solid border-2  gap-2">
                          <div>
                            Số trang
                          </div>
                          <div class="flex flex-col items-center">
                            <input type="text" name="pageNum1"
                              onChange={() => HandleInput2()} id="inputPageNum" class="w-32 h-7 rounded-sm px-3 text-gray-900 
                            placeholder:text-gray-400 text-[12px] leading-4" placeholder="Eg: 1-5, 8,11-13..." />
                            <div >
                              <div class="mt-1  w-32  shadow-sm">
                                <div id="pg2" onFocus={() => HandleInput()} class="h-full w-full text-[12px]  items-center ">
                                  <Select
                                    options={optionsPageN}
                                    id="selectPN"
                                    styles={customStyles}
                                    placeholder='Tùy chọn'
                                  // onChange={}
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
                            <input type="text" name="pageNum1" id="pageNum1" class="w-32 h-7 rounded-sm py-1 pl-3 pr-3 text-gray-900 
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
                            <input type="text" name="pageNum1" id="pageNum1" class="w-32 rounded-sm h-7 py-1 pl-3 pr-3 text-gray-900 
                          placeholder:text-gray-400 text-[12px] leading-6" placeholder="Eg: 1,4,8..." />
                          </div>
                        </div>



                      </nav >
                      {/* PageNum available */}
                      <div class="flex  p-1 items-center italic font-thin text-white brightness-50" id='pageNAvail'>
                        Số trang bạn có thể in: {userinfo.numpage}
                        <div>
                        </div>
                      </div>
                      {/*footer*/}
                      < div className="flex justify-end  pt-4 px-2 border-t border-solid border-blueGray-200 rounded-b" >

                        <button
                          className="text-white background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none 
                          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false)
                            setUser(previousSate => {
                              return { ...previousSate, pNum: 0 }
                            })
                          }}
                        >
                          Hủy
                        </button>

                        <SelectPrinter pageNum={user.pNum} />
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