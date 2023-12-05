import React from "react";


import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const FeedBack = () => {
    return (
        <>
            <button type="button" class="fixed z-10 md:bottom-[4rem] bottom-[2rem] md:right-[3rem] right-[1rem] grid place-items-center w-[54px] h-[54px] 
            z-30 rounded-full bg-blue-500 shadow-lg  hover:ouline-none hover:drop-shadow-lg hover:scale-105 
            active:drop-shadow-none active:shadow-none active:ring active:scale-105">
                <a href="https://www.facebook.com">
                    <ChatBubbleOvalLeftEllipsisIcon class="w-10  text-white " />
                </a>


            </button>
        </>
    )
}
export default FeedBack;
