import StudentFolderCard from "../../components/StudentFolderCard";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { getHistory } from "../../service/userService";
const StudentPrintHistory = (props) => {
  const [listhistory, setListhistory] = useState([]);
  useEffect(() => {
    const test = async () => {
      try {
        const data = {
          userid: props.user.userid,
        };
        const list = await getHistory(data);
        setListhistory(list.data.data);
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test();
  }, []);
  return (
    <>
      <div className="bg-white-fill h-fit min-h-screen bg-cover ">
        <div class="flex overflow-auto">
          <div class="flex w-full place-content-center">
            <div class="sm:mx-0.8 lg:mx-0.8 w-5/6 ">
              <div class="inline-block min-w-full py-2 pt-10 sm:px-6 lg:px-8">
                <div class=" rounded-lg shadow">
                  {/* TITLE */}

                  <div class="flex w-full border-2 border-b-black bg-white">
                    <div class="text-black-600 w-full px-10 py-5 text-3xl font-bold">
                      Lịch sử và tình trạng in
                    </div>
                  </div>
                  {/* TABLE */}
                  <div className="flex">
                    <table class="round-md w-full table-auto divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-white shadow-2xl">
                        <tr>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left  text-lg font-bold text-gray-900"
                          >
                            Tên tài liệu
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Số trang
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Ngày đặt
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Ngày lấy
                          </th>
                          <th
                            scope="col"
                            class="px-7 py-4 text-left text-lg font-bold text-gray-900"
                          >
                            Vị trí
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
                        {listhistory &&
                          listhistory.map((history, index) => {
                            const createdAtDate = new Date(history.createdAt);
                            const formattedCreatedAt =
                              createdAtDate.toLocaleDateString("en-GB");
                            const dateDate = new Date(history.date);
                            const formattedDate =
                              dateDate.toLocaleDateString("en-GB");
                            return (
                              <tr className="odd:bg-blue-50 even:bg-white">
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {index + 1}
                                </td>
                                <td class="whitespace-nowrap px-[18px]  py-4 text-lg font-light text-gray-900">
                                  <p class="w-[200px]  truncate">
                                    {history.namefile}
                                  </p>
                                  <div class="opacity-0  hover:opacity-100 duration-300 absolute flex justify-self-stretch 
                                  px-1 text-sm bg-gray-200 text-black "> {history.namefile}
                                  </div>
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.numpage}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {formattedCreatedAt}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.time}{', '}
                                  {formattedDate}
                                </td>
                                <td class="whitespace-nowrap px-7 py-4 text-lg font-light text-gray-900">
                                  {history.location}
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

export default StudentPrintHistory;
