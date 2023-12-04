import React from "react";
import PrintingPage from "../pages/student/PrintingPage";

const StudentFileCard = ({
  doc,
  numpPage,
  textFile,
  textSubject,
  textType,
  fileLink,
  filetoDown,
  filetoPrint,
}) => {
  return (
    <>
      <div class="group/item h-fit w-[12rem] rounded-lg bg-blue-100  shadow-lg hover:shadow-none">
        <div class="flex w-[12rem]  rounded-t-lg  bg-blue-600 group-hover/item:bg-blue-800">
          <div
            class="my-1.5 grid h-[9.5rem] w-full items-center gap-0 border bg-fileimg-fill  bg-cover bg-center
                            p-7  "
          >
            <button
              className="h-[25px] w-[75px] justify-self-center bg-[#658DF1] text-sm text-white opacity-80  hover:scale-110
                        hover:bg-white hover:text-blue-600 hover:opacity-100 hover:drop-shadow-2xl focus:ring-blue-500 active:ring active:drop-shadow-none"
            >
              <a href={fileLink} target="_blank">
                Xem
              </a>
            </button>
            <button
              className="h-[25px] w-[75px] justify-self-center bg-[#658DF1] text-sm text-white  opacity-80  hover:scale-110
                        hover:bg-white hover:text-blue-600 hover:opacity-100 hover:drop-shadow-2xl focus:ring-blue-500 active:ring active:drop-shadow-none"
            >
              <a href={filetoDown} target="_blank">
                Tải về
              </a>
            </button>
            <PrintingPage
              doc={doc}
              docUrl={filetoPrint}
              userNumPage={numpPage}
            />
          </div>
        </div>
        <div class="flex h-[100px] flex-col rounded-b-md px-2 pb-2  group-hover/item:bg-blue-400 ">
          <div class="mb-1 flex flex  flex-1 justify-between">
            <h1 class="font-md line-clamp-2  h-fit w-[85%] text-blue-600 group-hover/item:text-white ">
              {" "}
              {textFile}{" "}
            </h1>

            <div
              class="absolute mt-6 flex max-w-[11rem] justify-self-stretch bg-gray-200 px-1 
                        text-sm  text-blue-600 opacity-0 duration-300 hover:opacity-100 "
            >
              {" "}
              {textFile}
            </div>

            <span class="text-blue-500 group-hover/item:text-white">
              <p class="my-1 text-sm text-blue-400 group-hover/item:text-white">
                {textType}
              </p>
            </span>
          </div>
          <span class="text-sm font-bold  text-blue-700 group-hover/item:text-white">
            {textSubject}
          </span>
        </div>
      </div>
    </>
  );
};

export default StudentFileCard;
