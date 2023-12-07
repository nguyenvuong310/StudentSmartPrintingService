import { useState, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin";
import MenuBarAdmin from "./MenuBarAdmin";
import { getHistory, getHistorybySearch } from "../../service/adminService";
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
  return (
    <>
      <div className="bg-white-fill bg-cover">
        <HeaderAdmin />
        <div class="flex h-screen">
          <div className="fixed top-0 z-20">
            <MenuBarAdmin />
          </div>
          <div class="ml-[18rem] flex w-full place-content-center">
            <div class="sm:mx-0.8 lg:mx-0.8 w-11/12 overflow-x-auto">
              <div class="inline-block min-w-full py-2 pt-10 sm:px-6 lg:px-8">
                <div class="overflow-hidden rounded-lg shadow">
                  <div class="flex w-full border-2 border-b-black bg-white">
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
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            MSSV
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Họ và tên
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Tài liệu
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Máy in
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Thời gian đặt
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Thời gian nhận
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Trạng thái
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
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.userid}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.name}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.namefile}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                  {history.location}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                  {formattedCreatedAt}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                  {formattedDate}
                                </td>
                                {history.status ? (
                                  <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                    <div className="my-2 flex w-[8rem] rounded-full border bg-[#545F71] px-1 py-1 text-base text-white">
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
                                  </td>
                                ) : (
                                  <td class="whitespace-nowrap px-7 py-4 text-left text-lg font-light text-gray-900">
                                    <div className="my-2 flex w-[10rem] rounded-full border border-gray-300 bg-white px-1 py-1 text-base text-white">
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
                                      <span className="mx-1 font-semibold text-[#545F71]">
                                        Chưa được in
                                      </span>
                                    </div>
                                  </td>
                                )}
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
        </div>
      </div>
    </>
  );
};
export default ManagePrintingHistory;
