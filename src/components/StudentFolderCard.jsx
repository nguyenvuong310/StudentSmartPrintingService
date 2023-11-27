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

} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import React from "react";

import FolderImg from "../assets/folderimg.png"

const StudentFolderCard = ({ text, imageUrl }) => {
    return (
        <button
            class="flex flex-row space-x-5 bg-white border border-gray-200 rounded-lg w-64 hover:border-b-3 hover:border-b-blue-500 active:border-blue-100">
            <div class="flex justify-center bg-white items-center text-gray-500 rounded-l-lg">
                <img
                    src={FolderImg}
                    alt="image 1"
                    className="m-1 object-cover"
                />
            </div>
            <div class="text-center bg-[#98D3FF] h-full p-6 rounded-r-lg">
                <h1 class="font-bold text-gray-700 text"> {text} </h1>
            </div>
        </button>

    );
};

export default StudentFolderCard;
