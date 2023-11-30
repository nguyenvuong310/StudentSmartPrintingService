import HeaderAdmin from "./HeaderAdmin";
// import LanguageIcon from "@heroicons/react/24/outline";
import whitefill from "../../assets/white-fill.png";
const HomePageAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <div class="flex flex-col bg-white-fill mt-1 ">


        {/* <!-- component --> */}
        <div class="sm:flex hidden  bg-blue-500  w-full max-w-[17rem] rounded-r-xl">
          <div class=" relative flex flex-col  bg-blue-800 text-white h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div class="mb-2 p-5 border-b ">
              <h5 class=" antialiased tracking-normal font-sans text-4xl font-bold leading-snug ">MENU</h5>
            </div>
            <nav class="flex flex-col gap-3 min-w-[220px] py-5 pr-2 font-sans text-base text-xl ">
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="/admin/student-manage">Quản lý sinh viên</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="/admin/printer-manage">Quản lý máy in</a>
                </div>
              </div>
              <div role="button" tabindex="0" class="border-solid border-2 flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div class="grid place-items-center mr-4">
                  <a href="/admin/printing-history-manage">Quản lý máy in</a>
                </div>
              </div>

            </nav>
          </div>
        </div>
      </div>

    </>
  );
};
export default HomePageAdmin;
