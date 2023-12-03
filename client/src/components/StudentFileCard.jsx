import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";
import PrintingPage from "../pages/student/PrintingPage";
import FolderImg from "../assets/folderimg.png"

const StudentFolderCard = ({ doc, numpPage, textFile, textSubject, textType, fileLink, filetoDown, filetoPrint }) => {
    return (
        <>
            <div class="bg-blue-100 w-[12rem] rounded-lg h-fit group/item  shadow-lg hover:shadow-none">
                <div class="w-[12rem] rounded-t-lg  flex  bg-blue-600 group-hover/item:bg-blue-800">
                    <div class="h-[9.5rem] w-full border grid gap-0 items-center p-7 my-1.5  bg-cover bg-center
                            bg-fileimg-fill  " >
                        <button className="text-white text-sm bg-[#658DF1] w-[75px] h-[25px] hover:scale-110 justify-self-center  opacity-80
                        hover:bg-white hover:text-blue-600 hover:drop-shadow-2xl hover:opacity-100 active:drop-shadow-none active:ring focus:ring-blue-500">
                            <a href={fileLink} target="_blank">Xem</a>
                        </button>
                        <button className="text-white text-sm bg-[#658DF1] w-[75px] h-[25px] hover:scale-110  justify-self-center  opacity-80
                        hover:bg-white hover:text-blue-600 hover:drop-shadow-2xl hover:opacity-100 active:drop-shadow-none active:ring focus:ring-blue-500">
                            <a href={filetoDown} target="_blank">Tải về</a>
                        </button>
                        <PrintingPage doc={doc} docUrl={filetoPrint} userNumPage={numpPage} />
                    </div>
                </div>
                <div class="px-2 pb-2 h-[100px] flex flex-col rounded-b-md  group-hover/item:bg-blue-400 ">
                    <div class="flex flex-1 flex  justify-between mb-1">
                        <h1 class="text-blue-600 group-hover/item:text-white  w-[85%] line-clamp-2 h-fit font-md "> {textFile} </h1>

                        <div class="opacity-0 max-w-[11rem] hover:opacity-100 duration-300 absolute flex justify-self-stretch 
                        mt-6  px-1 text-sm bg-gray-200 text-blue-600 "> {textFile}</div>

                        <span class="text-blue-500 group-hover/item:text-white">
                            <p class="text-blue-400 group-hover/item:text-white text-sm my-1">{textType}</p>
                        </span>
                    </div>
                    <span class="font-bold text-sm  text-blue-700 group-hover/item:text-white">{textSubject}</span>
                </div>

            </div>

        </>
    );
};

export default StudentFolderCard;