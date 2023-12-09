import { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin";
import MenuBarAdmin from "./MenuBarAdmin";
import { getHistory, getHistorybySearch, ConfirmPrinted } from "../../service/adminService";
import { CheckIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const ManagePrintingHistory = () => {
  const [listHistory, setListHistory] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  useEffect(() => {
    const test = async () => {
      try {
        if (listHistory.length == 0) {
          const list = await getHistory();
          setListHistory(list.data.history);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test();
  }, []);
  const handleOnChangeSeacrhContent = async (event) => {
    if (event.key === "Enter") {
      const data = {
        content: event.target.value,
      };
      const history = await getHistorybySearch(data);
      console.log(history);
      if (history) setListHistory(history.data.history);
      setSearchContent("");
    }
  };
  const handleConfirmPrinted = async (id) => {
    const data = {
      id: id
    }
    await ConfirmPrinted(data)
    const list = await getHistory();
    setListHistory(list.data.history);

  };

  return (
    <>
      <div className="bg-white-fill  h-fit bg-cover ">
        <HeaderAdmin />
        <div className="fixed top-0 z-20">
          <MenuBarAdmin />
        </div>
        <div class="flex  ml-[18rem] overflow-auto scrollbar-thin scrollbar-thumb-[#a3a2a5]
                      scrollbar-track-[#f1f1f1] hover:scrollbar-thumb-[#c4c3c6] ">
          <div class="flex py-10 ml-[12px]">
            <div class=" rounded-lg shadow">
              <div class="flex border-2 border-b-black bg-white">
                <div class="text-black-600 w-full px-5 py-5 text-2xl font-bold">
                  Quản lý lịch sử in
                </div>
                <div className="text-medium flex cursor-pointer items-center px-4 pt-1 font-medium leading-none">
                  <div class="flex">
                    <a href="/admin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex w-full border border-b-black bg-[#8289ad]">
                <div class="relative ml-auto mr-3 flex-wrap justify-between">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    onChange={(event) =>
                      setSearchContent(event.target.value)
                    }
                    value={searchContent}
                    onKeyDown={(event) =>
                      handleOnChangeSeacrhContent(event)
                    }
                    type="text"
                    class="my-1 block h-8 w-full rounded-full border border-gray-300 bg-white p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search"
                    required
                  ></input>
                </div>
              </div>
              <div className="flex">
                <table class="round-md w-full table-auto divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-white shadow-2xl">
                    <tr>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        MSSV
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Họ và tên
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Tài liệu
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Máy in
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Thời gian đặt
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Thời gian nhận
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4 text-left text-lg font-bold text-gray-900"
                      >
                        Trạng thái
                      </th>
                      <th
                        scope="col"
                        class="px-[18px] py-4  text-left text-lg font-bold text-gray-900"
                      >
                        Xác nhận in
                      </th>
                    </tr>
                  </thead>
                  <tbody className="mt-1">
                    {listHistory &&
                      listHistory.map((history, index) => {
                        const createdAtDate = new Date(history.createdAt);
                        const formattedCreatedAt =
                          createdAtDate.toLocaleDateString("en-GB");
                        const dateDate = new Date(history.date);
                        const formattedDate =
                          dateDate.toLocaleDateString("en-GB");
                        return (
                          <tr className="odd:bg-blue-50 even:bg-white">
                            <td class="whitespace-nowrap px-[18px] py-4 text-lg font-light text-gray-900">
                              {history.userid}
                            </td>
                            <td class="whitespace-nowrap px-[18px]  py-4 text-lg font-light text-gray-900">

                              <p class="w-[200px]  truncate">
                                {history.name}
                              </p>
                            </td>
                            <td class="whitespace-nowrap px-[18px]  py-4 text-lg font-light text-gray-900">
                              <p class="w-[125px]  truncate">
                                {history.namefile}
                              </p>
                              <div class="opacity-0  hover:opacity-100 duration-300 absolute flex justify-self-stretch 
                         px-1 text-sm bg-gray-200 text-black "> {history.namefile}</div>
                            </td>
                            <td class="whitespace-nowrap px-[18px] py-4 text-left text-lg font-light text-gray-900">
                              {history.location}
                            </td>
                            <td class="whitespace-nowrap px-[18px] py-4 text-left text-lg font-light text-gray-900">
                              {formattedCreatedAt}
                            </td>
                            <td class="whitespace-nowrap px-[18px] py-4 text-left text-lg font-light text-gray-900">
                              {history.time}{', '}
                              {formattedDate}
                            </td>

                            {history.status ? (
                              <td class="whitespace-nowrap px-[18px] py-4 text-left text-lg font-light text-gray-900">
                                <div className="w-[9rem]">
                                  <div className="my-2 flex w-[8rem] rounded-full border bg-[#545F71] py-1 text-base text-white">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="#50F204"
                                      viewBox="0 0 24 24"
                                      stroke-width="1"
                                      stroke="currentColor"
                                      class="ml-1 mt-1 h-4 w-4 place-items-center text-white"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span className="mx-1 font-semibold">
                                      Hoàn thành
                                    </span>
                                  </div>
                                </div>

                              </td>
                            ) : (
                              <td class="whitespace-nowrap px-[18px] py-4 text-left text-lg font-light text-gray-900">
                                <div className="my-2 flex w-[9rem] rounded-full border border-gray-300 bg-white  py-1 text-base text-white">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="red"
                                    viewBox="0 0 24 24"
                                    stroke-width="1"
                                    stroke="currentColor"
                                    class="ml-1 mt-1 h-4 w-4 place-items-center text-[#545F71]"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span className="ml-1  font-semibold text-[#545F71]">
                                    Chưa được in
                                  </span>
                                </div>
                              </td>
                            )}
                            <td class="whitespace-nowrap px-[18px] py-4  text-left text-lg font-light text-gray-900">
                              {history.status == 0 ? <button class="flex rounded-lg w-[100px] text-sm bg-[#9fedb4] h-[33px] hover:scale-110  justify-self-center 
                                      hover:bg-white hover:text-[#34e062] hover:drop-shadow-2xl  active:drop-shadow-none "
                                onClick={() => handleConfirmPrinted(history.id)}>
                                <div class="bg-green-500 rounded-l-lg w-6 h-[33px] flex self-center ">
                                  <CheckIcon class=" m-1 self-center font-black" />
                                </div>
                                <div class="p-2 rounded-r-lg self-center">
                                  Xác nhận

                                </div>
                              </button> :
                                <button class="flex rounded-full h-[33px] w-[100px] text-sm p-1 justify-center  items-center  
                                    " disabled={true} onClick={() => handleConfirmPrinted(history.id)}>
                                  <div class="border-2 border-green-400  w-[33px] h-[33px] rounded-full flex justify-center ">
                                    <CheckCircleIcon class=" fill-green-300 text-white self-center font-black" />
                                  </div>

                                </button>}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManagePrintingHistory;
