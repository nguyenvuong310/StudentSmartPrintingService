import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buypage } from "../service/userService";
export default function BuyPageModal(props) {
  const optionsPaper = [
    { value: 1000, label: "A3" },
    { value: 500, label: "A4" },
    { value: 250, label: "A5" },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [numpage, setNumpage] = useState(0);
  const [pagesize, setPagesize] = useState(0);
  const [totalMoney, setMoney] = useState(0);
  const [numpagebill, setnumpagebill] = useState(0);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (showModal == false) {
      setNumpage(0);
      setPagesize(0);
    }
    calMoney();
  }, [pagesize, numpage, showModal]);

  const handlesetPagenum = (event) => {
    setNumpage(event.target.value);
  };

  const handlesetPagesize = (event) => {
    setPagesize(event.value);
    if (event.value == 1000) setnumpagebill(2);
    if (event.value == 500) setnumpagebill(1);
    if (event.value == 250) setnumpagebill(0.5);
  };

  const calMoney = () => {
    setMoney(pagesize * numpage);
  };
  const handlecheck = () => {
    setCheck(!check);
  };
  const handleBuyPage = async () => {
    if (numpage == 0) {
      toast.error("Chưa nhập số trang cần mua", {
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
    if (!/^\d+$/.test(numpage)) {
      toast.error("Nhập số trang chưa hợp lệ", {
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
    if (pagesize == 0) {
      toast.error("Chưa chọn kích thước trang", {
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
    if (!check) {
      toast.error("Chưa đồng ý các điều khoản và chính sách", {
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
    const data = {
      userid: props.userinfo.userid,
      numpage: numpage * numpagebill,
      price: totalMoney,
      payConfirm: false,
    };
    await buypage(data);
    setShowModal(false);
    props.input(!props.buyed);
    setNumpage(0);
    setPagesize(0);
    setCheck(false);
    toast.success("Mua thành công", {
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
  const handleCancle = () => {
    setShowModal(false);
    setNumpage(0);
    setPagesize(0);
    setCheck(false);
  };
  return (
    <>
      <button
        className="h-10 w-40 rounded bg-green-500 pl-4 text-sm font-bold uppercase 
                text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-green-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div class="flex flex-row space-x-2">
          {" "}
          <ShoppingCartIcon className="w-5" /> Mua Trang In
        </div>
      </button>
      {showModal ? (
        <>
          <div class="fixed inset-0 z-50 flex justify-center outline-none focus:outline-none ">
            <div class="m-auto flex w-[30rem] flex-col justify-between rounded-lg bg-white p-8">
              <div className="mb-6 mt-2 grid grid-cols-1 gap-6">
                <div>
                  <div className="mb-2 font-bold">Số trang:</div>
                  <input
                    onChange={(event) => handlesetPagenum(event)}
                    type="text"
                    class="block w-full rounded-lg border border-gray-400 p-2 ps-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Nhập số trang..."
                  />
                </div>
                <div>
                  <div className="mb-2 font-bold">Loại giấy:</div>
                  {/* <PaperTypes /> */}
                  <Select
                    options={optionsPaper}
                    placeholder="Tùy chọn"
                    onChange={(event) => handlesetPagesize(event)}
                  ></Select>
                </div>
                <div className="mb-2 flex flex-col space-y-3 font-bold">
                  <p>Tổng tiền:</p>
                  <div className="grid grid-cols-2 place-content-between gap-[20rem]">
                    <p className="ml-2">{totalMoney.toLocaleString()}</p>
                    <p>VND</p>
                  </div>
                  <hr className=" border-blue-gray-50" />
                </div>

                <div className="mx-2 flex flex-row space-x-3">
                  <input type="checkbox" onClick={handlecheck} />
                  <p className="text-sm font-semibold">
                    {" "}
                    Bạn đồng ý với các điều khoản thanh toán cũng như các chính
                    sách của dịch vụ SPSS{" "}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-[7rem] px-[50px]">
                <button
                  disable
                  onClick={() => handleBuyPage()}
                  type="button"
                  className="w-20 bg-[#658DF1]  p-1 text-white"
                >
                  Đồng ý
                </button>
                <button
                  type="button"
                  onClick={() => handleCancle()}
                  className="w-20 border border-black bg-white p-1"
                >
                  Hủy
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
