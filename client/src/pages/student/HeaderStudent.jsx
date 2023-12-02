import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import ButtonUpload from "../../components/buttonUpload";
import { path } from "../../utils/constant";
import ProfileMenu from "../../components/ProfileMenu";
// import HomepageStudent from "./homepageST";
// import SelectPrinter from "./SelectPrinter";
// import PrintingPage from "./PrintingPage";
const HeaderStudent = (props) => {
  const [check, setCheck] = useState(1);
  const [content, setContent] = useState("");
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // const [open, setOpen] = useState(1);

  // const toggleOpen = (id) => setOpen(id);
  const handleOnChangeCheck = (data) => {
    setCheck(() => data);
  };
  const test = (data) => {
    handleOnChangeCheck(data);
    props.input(data);
    props.inputsearch(1);
    props.inputcontent("");
  };
  const handleSearch = async (event) => {
    if (event.key == "Enter") {
      if (props.value == 1) {
        props.inputsearch(2);
        props.input(5);
      }
      if (props.value == 2) props.inputsearch(3);
      if (props.value == 5) {
        props.inputsearch(5);
      }
      props.inputcontent(event.target.value);
      setContent("");
    }
  };
  return (
    <nav class="fixed sticky start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* ICON & NAME*/}
        <Link
          to={path.HOMEPAGESTUDENT}
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            SSPS
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* UPLOAD	+	 */}

        {/* KHO HỆ THỐNG & CÁ NHÂN */}
        <div
          id="KhoHeThong"
          class="mb-4 border-b border-gray-200 dark:border-gray-700"
        >
          <ul
            class="-mb-px flex flex-wrap text-center text-sm font-medium"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                onClick={() => test(1)}
                class="inline-block rounded-t-lg border-b-2 p-4"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                KHO HỆ THỐNG
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                onClick={() => test(2)}
                class="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                KHO CÁ NHÂN
              </button>
            </li>
          </ul>
        </div>

        {/* SEARCH */}
        <div class="relative hidden md:block">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            onKeyDown={(event) => handleSearch(event)}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            type="text"
            id="search-navbar"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Tìm kiếm..."
          />
        </div>

        {/* LANGUAGE */}
        <div class="relative hidden space-x-4 sm:flex">
          <div class="text-black-300 flex flex-col rounded-md px-3 text-sm font-semibold">
            <div class="flex flex-row pl-4 pt-3">
              {" "}
              <HomeIcon className="w-5 pr-1" /> Ngôn ngữ
            </div>
            <select class="text-black-300 flex flex-col rounded-md px-5 py-1 text-xs font-light">
              <option>Tiếng Việt</option>
              <option>Tiếng Anh</option>
            </select>
          </div>
        </div>
        <ButtonUpload inputupload={props.inputupload} upload={props.upload} />
        <ProfileMenu input={handleOnChangeCheck} value={check} />
        {check == 3 && props.input(3)}
      </div>
    </nav>
  );
};

export default HeaderStudent;
