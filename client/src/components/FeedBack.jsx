import React from "react";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const FeedBack = () => {
  return (
    <>
      <button
        type="button"
        class="hover:ouline-none fixed bottom-[2rem] right-[1rem] z-0 grid h-[54px] w-[54px] place-items-center 
            rounded-full bg-blue-500 shadow-lg hover:scale-105  hover:drop-shadow-lg active:scale-105 active:shadow-none 
            active:ring active:drop-shadow-none md:bottom-[4rem] md:right-[3rem]"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkQCf9EypXasaksxAq09lFZ6uMtWZBh656V2Or74leVruGhw/viewform"
          target="_blank"
        >
          <ChatBubbleOvalLeftEllipsisIcon class="w-10  text-white " />
        </a>
      </button>
    </>
  );
};
export default FeedBack;
