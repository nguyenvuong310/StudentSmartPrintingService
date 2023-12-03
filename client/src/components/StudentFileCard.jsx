import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";
import PrintingPage from "../pages/student/PrintingPage";
import FolderImg from "../assets/folderimg.png";

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
    <div class="grid w-[12rem] gap-2  rounded-lg bg-blue-600 shadow ">
      <div class="mt-2 grid h-[9.5rem] w-full grid-cols-1 justify-evenly gap-4 border bg-fileimg-fill bg-cover bg-center p-5 ">
        <button className="ml-[28%] h-[20px] w-[60px] bg-[#658DF1] text-white opacity-80">
          <a href={fileLink} target="_blank">
            Xem
          </a>
        </button>
        <button className="ml-[28%] h-[20px] w-[60px] bg-[#658DF1] text-white opacity-80">
          <a href={filetoDown} target="_blank">
            Tải vê
          </a>
        </button>
        <PrintingPage doc={doc} docUrl={filetoPrint} userNumPage={numpPage} />
      </div>

      <div class="rounded-b-md bg-blue-100 p-2">
        <div class="mb-1 flex items-center justify-between">
          <h1 class="font-medium text-blue-600"> {textFile} </h1>
          <span class="text-blue-500">
            <p class="my-1 text-sm text-blue-400">{textType}</p>
          </span>
        </div>
        <span class="p-0.5 text-sm font-bold text-blue-700">{textSubject}</span>
      </div>
    </div>
  );
};

export default StudentFileCard;
