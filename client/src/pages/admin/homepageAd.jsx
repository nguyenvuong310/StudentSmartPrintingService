import Footer from "../../components/Footer";
import HeaderAdmin from "./HeaderAdmin";
// import LanguageIcon from "@heroicons/react/24/outline";
import whitefill from "../../assets/white-fill.png";
import {
  UserGroupIcon,
  PrinterIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import MenuAdmin from "./MenuBarAdmin";
const HomePageAdmin = () => {
  return (
    <>
      <div class="bg-white-fill bg-cover">
        <HeaderAdmin />
        <div class="flex h-screen">
          <div class="fixed top-0 z-20">
            <MenuAdmin />
          </div>

          {/* <!-- component --> */}
          {/* <div class="sm:flex hidden  bg-blue-500  w-full max-w-[17rem] rounded-r-xl">
          <div class=" relative flex flex-col  bg-blue-800 text-white h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div class="mb-2 p-5 border-b ">
              <h5 class=" antialiased tracking-normal font-sans text-4xl font-bold leading-snug ">MENU</h5>
            </div>
            <nav class="flex flex-col gap-3 min-w-[220px] py-5 pr-2 font-sans text-base text-xl ">
              <div role="button" tabindex="0  " class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./student-manage">Quản lý sinh viên</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./printer-manage">Quản lý máy in</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="./printing-history-manage">Quản lý máy in</a>
                </div>
              </div>

            </nav>
          </div>


        </div> */}
        </div>
      </div>
    </>
  );
};
export default HomePageAdmin;
