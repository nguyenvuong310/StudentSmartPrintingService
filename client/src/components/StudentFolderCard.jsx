import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

import {
    FolderIcon,
    FolderPlusIcon,
    FolderMinusIcon,
    LockClosedIcon

} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";

import FolderImg from "../assets/folderimg.png"

const StudentFolderCard = ({ text }) => {

    return (
        <button
            class="hover:shadow-lg hover:shadow-gray-900/50 active:shadow-none bg-white duration-125 ease-in-out transform hover:scale-105 
        focus-within:scale-105 focus:ring rounded-lg"
            onBlur={e => {
                // only re-focus if the user clicked on something
                // that was NOT an input element
                if (e.relatedTarget === null) {
                    e.target.focus();
                }
            }}
        >
            <div class='flex w-72 h-24' >
                <div class="flex flex-1 bg-white justify-items-center 
        bg-[url('././assets/folderimg.png')] bg-center bg-no-repeat bg-[length:81px_76px] rounded-lg"  >
                </div>
                <div class='w-44 bg-[#98D3FF] rounded-r-lg grid grid-cols-1 gap-4 place-content-center px-5'>
                    <div class="flex text-lg font-bold opacity-90 place-content-center">
                        {text}
                    </div>
                </div>

            </div>
        </button>

    );
};
export default StudentFolderCard;