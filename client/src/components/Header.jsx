import { useState, useEffect, cloneElement } from "react";
import React from "react";
import { HomeIcon, LanguageIcon } from "@heroicons/react/24/outline";
import {
  Typography,

} from "@material-tailwind/react";

const Header = ({ role }) => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <nav class="bg-white shadow-xl">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
            </div>
            <div class="flex flex-col space-x-4 px-3 py-2">
              <Typography variant="small" className="px-2 font-bold">
                BOOKING CARE
              </Typography>

            </div>
          </div>
          <div class="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <div class="text-black-300 flex flex-col rounded-md px-3 text-sm font-semibold">
                  <div class="flex flex-row pl-4 pt-3">
                    {" "}
                    <LanguageIcon className="w-5 pr-1" /> Ngôn ngữ
                  </div>
                  <select class="text-black-300 flex flex-col rounded-md px-5 py-1 text-xs font-light">
                    <option>Tiếng Việt</option>
                    <option>Tiếng Anh</option>
                  </select>
                </div>
                <div class="pt-4">
                  <a
                    href="/login"
                    class="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Đăng nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
