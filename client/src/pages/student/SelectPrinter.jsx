import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useSelector } from "react-redux";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { getUserInfo, getAllPrinter, Print } from "../../service/userService";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SelectPrinter(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [showAlert, setAlert] = useState(false);
  const [userinfo, setUserinfo] = useState({});
  const [printers, setprinters] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [printerid, setPrinterid] = useState("");
  const [location, setLocation] = useState("");
  const [configprint, setConfig] = useState({});
  const handlesetPrinterid = (printer) => {
    setPrinterid(printer.id);
    setLocation(printer.location);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.value);
  };

  useEffect(() => {
    const test = async () => {
      try {
        const data = await getUserInfo();
        setUserinfo(data.data.user);

        const printer = await getAllPrinter();
        setprinters(printer.data.printer);
      } catch (error) {
        console.error("Error fetching user infomation", error);
      }
    };
    test();
  }, []);

  const checkvalidconfigprint = () => {
    const configprint = {
      numpage: props.handleNumpage(props.numpageconfig),
      layout: props.layout,
      pagesize: props.pagesize,
      pageperside: props.pageperside,
      alignment: props.alignment,
      scale: props.scale,
      copy: props.copy,
    };
    setConfig(configprint);
    if (configprint.numpage == -1 || !configprint.numpage) {
      toast.error("Thông tin số trang chưa hợp lệ", {
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
    if (!props.layout) {
      toast.error("Chưa chọn layout", {
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
    if (!props.pagesize) {
      toast.error("Chưa chọn cỡ giấy", {
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
    if (props.pageperside == 0) {
      toast.error("Chưa chọn số trang trên một mặt", {
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
    if (!/^\d+$/.test(props.pageperside)) {
      toast.error("Số trang trên một mặt không hợp lệ", {
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
    if (!props.alignment) {
      toast.error("Chưa chọn căn lề", {
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
    if (!props.scale) {
      toast.error("Chưa chọn tỉ lệ", {
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
    if (props.copy == 0) {
      toast.error("Chưa chọn số bản in", {
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
    if (!/^\d+$/.test(props.copy)) {
      toast.error("Số bản in không hợp lệ", {
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
    if (configprint.numpage > props.numpage) {
      toast.error("Vượt quá số trang cho phép", {
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
    setShowModal(true);
  };
  const optionsTime = [
    { value: "6h-7h", label: "6h-7h" },
    { value: "7h-8h", label: "7h-8h" },
    { value: "8h-9h", label: "8h-9h" },
    { value: "9h-10h", label: "9h-10h" },
    { value: "10h-11h", label: "10h-11h" },
    { value: "11h-12h", label: "11h-12h" },
    { value: "12h-13h", label: "12h-13h" },
    { value: "13h-14h", label: "13h-14h" },
    { value: "14h-15h", label: "14h-15h" },
    { value: "15h-16h", label: "15h-16h" },
    { value: "16h-17h", label: "16h-17h" },
    { value: "17h-18h", label: "17h-18h" },
  ];

  const printerList = [];
  printers.forEach((printer, index) => {
    let statusDiv = [];

    if (printer.status === true) {
      statusDiv = (
        <>
          <div class="mt-1 flex items-center text-sm">
            <CheckCircleIcon class="w-7 fill-green-500 pr-1" />
            Ready
          </div>
        </>
      );
    } else if (printer.status === false) {
      statusDiv = (
        <>
          <div class="mt-1 flex items-center text-sm">
            <XCircleIcon class="w-7 fill-red-500 pr-1" />
            Not ready
          </div>
        </>
      );
    }
    printerList.push(
      <>
        {/* Item */}
        <button
          onClick={() => handlesetPrinterid(printer)}
          class="duration-125 transform rounded-lg bg-white ease-in-out focus-within:scale-105 hover:scale-105 hover:shadow-lg 
                 hover:shadow-gray-900/50 focus:ring active:shadow-none"
          onBlur={(e) => {
            // only re-focus if the user clicked on something
            // that was NOT an input element
            if (e.relatedTarget === null) {
              e.target.focus();
            }
          }}
        >
          <div class="flex h-20 w-72">
            <div
              class="flex flex-1 justify-items-center rounded-lg 
                 bg-white bg-[url('././assets/printer.png')] bg-[length:84px_79px] bg-cover bg-center bg-no-repeat"
            ></div>
            <div class="flex w-48 flex-col rounded-lg  rounded-l-xl bg-[#D6E4FD] px-3 pt-1 ">
              <div class="flex font-bold">{printer.name}</div>
              <div class="flex text-sm">{printer.location}</div>
              {statusDiv}
            </div>
          </div>
        </button>
      </>,
    );
  });

  const customStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#608bd1" : null,

        color: "#333333",
        cursor: "pointer",
      };
    },
  };
  const handlePrint = async () => {
    if (!printerid) {
      toast.error("Chưa chọn máy in", {
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
    if (!date) {
      toast.error("Chưa chọn ngày lấy", {
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
    if (!time) {
      toast.error("Chưa chọn thời gian lấy", {
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
    const setupprinter = {
      printerid: printerid,
      time: time,
      date: date,
      location: location,
    };
    props.offModalPrint();
    setShowModal(false);

    const data = {
      user: userinfo,
      doc: props.doc,
      configprint: configprint,
      setupprinter: setupprinter,
    };
    // console.log(data)
    await Print(data);
    setTime("");
    setDate("");
    setPrinterid("");
    setLocation("");
    toast.success("In thành công", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleCancel = () => {
    setTime("");
    setDate("");
    setPrinterid("");
    setLocation("");
    setShowModal(false);
  };
  return (
    <>
      <button
        className="active:bg-emerald-600 mb-1 mr-1 rounded bg-blue-500 px-6 py-2 text-sm font-bold 
                uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => checkvalidconfigprint()}
      >
        Tiếp tục
      </button>
      {/* Not enough page -> alert */}
      {showAlert ? (
        <>
          <div class="fixed  inset-0 z-50 outline-none focus:outline-none ">
            <div class="my-6 flex h-screen items-center justify-center">
              {/*content*/}
              <div
                class=" block  grid h-auto  w-[30%] min-w-[300px] items-center gap-y-10 
                                     rounded-lg  bg-white p-5 shadow-xl md:p-10"
              >
                {/* Header */}
                {/* Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                <div class="flex  ">
                  <p class="text-md text-center font-bold md:text-2xl">
                    Hiện tại bạn không đủ số trang in khả dụng. Bạn có muốn mua
                    thêm trang in?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex justify-center rounded-b ">
                  <button
                    className="background-transparent mr-3  w-auto 
                                                    rounded border border-2 border-black px-6 py-2 text-sm font-bold  uppercase text-black  shadow
                                                    transition-all duration-150 ease-linear hover:shadow-lg
                                                    "
                    type="button"
                    onClick={() => setAlert(false)}
                  >
                    Hủy
                  </button>
                  <button
                    className="active:bg-emerald-600 w-auto rounded bg-blue-500 
                                            px-6 py-3 text-sm font-bold uppercase text-white 
                                                    shadow outline-none transition-all 
                                                    duration-150  ease-linear hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setAlert(false)}
                  >
                    Đồng ý
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      {/* Select Printer */}
      {showModal ? (
        <>
          <div class="fixed  inset-0 z-50 outline-none focus:outline-none ">
            <div class="my-6 flex  h-screen justify-center">
              {/*content*/}
              <div
                class="block flex h-[90%] w-auto min-w-fit  rounded-lg  border-0 bg-cus-blue 
                                     shadow-lg outline-none focus:outline-none "
              >
                {/* PrintConfig */}

                <div class="w-full flex-1 md:h-full ">
                  <div class="flex h-full flex-col justify-center overflow-auto">
                    {/* Header */}
                    <div class="border-blueGray-200 sticky top-0 z-40 flex h-fit items-start   rounded-t  border-b border-solid bg-cus-blue p-3">
                      <h3 class="text-xl font-semibold text-white">
                        Chọn máy in
                      </h3>
                    </div>
                    {/* Bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                    <div
                      class="flex w-full flex-col  gap-x-10 gap-y-7 overflow-auto
                                         px-12 py-6  md:grid md:grid-flow-row md:grid-cols-2"
                    >
                      {printerList}
                    </div>
                    {/* Select Time */}
                    <div class="flex flex-row">
                      <div class="w-1/2">
                        <div
                          class="border-blueGray-200  flex items-start rounded-t 
                                            border-b border-solid bg-cus-blue p-3
                                             "
                        >
                          <h3 class="text-xl font-semibold text-white ">
                            Chọn ngày lấy tài liệu
                          </h3>
                        </div>
                        <div class="w-80 px-6 py-6 ">
                          <input
                            onChange={(event) => handleChangeDate(event)}
                            id="selectTime"
                            styles={customStyles}
                            maxMenuHeight={100}
                            isSearchable={false}
                            type="date"
                          />
                        </div>
                      </div>
                      <div>
                        <div
                          class="border-blueGray-200  flex items-start rounded-t 
                                            border-b border-solid bg-cus-blue p-3
                                             "
                        >
                          <h3 class="text-xl font-semibold text-white ">
                            Chọn thời điểm lấy tài liệu
                          </h3>
                        </div>
                        <div class="w-80 px-6 py-6 ">
                          <Select
                            options={optionsTime}
                            id="selectTime"
                            styles={customStyles}
                            placeholder="Chọn khung giờ"
                            maxMenuHeight={100}
                            isSearchable={false}
                            onChange={(event) => handleChangeTime(event)}
                          ></Select>
                        </div>
                      </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end rounded-b p-6">
                      <button
                        className="background-transparent mb-1  mr-1 px-6 py-2 text-sm font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none"
                        type="button"
                        onClick={() => handleCancel()}
                      >
                        Hủy
                      </button>
                      <button
                        className="active:bg-emerald-600 mb-1 mr-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={() => handlePrint()}
                      >
                        Tiếp tục
                      </button>
                    </div>
                  </div>
                </div>
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
