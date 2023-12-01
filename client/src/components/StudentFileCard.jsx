import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";
import PrintingPage from "../pages/student/PrintingPage";
import FolderImg from "../assets/folderimg.png"

const StudentFolderCard = ({ doc, numpPage, textFile, textSubject, textType, fileLink, filetoDown, filetoPrint }) => {
    return (
        <div class="w-[12rem] shadow rounded-lg  grid gap-2 bg-blue-600 ">
            <div class="h-[9.5rem] w-full border grid grid-cols-1 gap-4 justify-evenly p-5 mt-2 bg-cover bg-center bg-fileimg-fill " >
                <button className="text-white bg-[#658DF1] w-[60px] h-[20px] ml-[28%] opacity-80">
                    <a href={fileLink} target="_blank">Xem</a>
                </button>
                <button className="text-white bg-[#658DF1] w-[60px] h-[20px] ml-[28%] opacity-80">
                    <a href={filetoDown} target="_blank">Tải vê</a>
                </button>
                <PrintingPage doc={doc} docUrl={filetoPrint} userNumPage={numpPage} />
            </div>

            <div class="p-2 bg-blue-100 rounded-b-md">
                <div class="flex items-center justify-between mb-1">
                    <h1 class="text-blue-600 font-medium"> {textFile} </h1>
                    <span class="text-blue-500">
                        <p class="text-blue-400 text-sm my-1">{textType}</p>
                    </span>
                </div>
                <span class="font-bold text-sm p-0.5 text-blue-700">{textSubject}</span>
            </div>
        </div>

    );
};

export default StudentFolderCard;