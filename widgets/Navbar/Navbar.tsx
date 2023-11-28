"use client";

import { useState } from "react";
import UWPLogo from "@/public/assets/UWPLogo.svg";
import Phone from "@/public/assets/phone.svg";
import Edit from "@/public/assets/edit.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("menu trigger", isMenuOpen);

  return (
    <nav className="dark:bg-neutral-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={UWPLogo.src} className="h-8" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="min-[576px]:hidden inline-flex items-center justify-center text-white w-10 h-10 rounded-full border-2 border-rose-500 hover:bg-rose-800"
          >
            <img src={Phone.src} alt="" />
          </button>
          <button
            type="button"
            className="min-[576px]:hidden inline-flex items-center justify-center text-white w-10 h-10 rounded-full border-2 border-rose-500 hover:bg-rose-800"
          >
            <img src={Edit.src} alt="" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="min-[576px]:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white focus:outline-none dark:text-gray-400 dark:hover:bg-transparent"
          >
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button className="max-[576px]:hidden w-[176.33px] h-[45px] px-[25px] py-[15px] bg-rose-500 rounded-[60px] justify-start items-center gap-5 inline-flex">
            <div className="text-white text-base font-medium uppercase leading-tight">
              LET’S TALK
            </div>
            <div className="w-[16.33px] h-[15px] relative">
              <img src={Edit.src} alt="" />
            </div>
          </button>
        </div>

        <div className={`${!isMenuOpen && "hidden"} w-full md:block md:w-auto`}>
          <ul className=" text-white max-[576px]:h-screen bg-neutral-900 font-medium flex flex-col p-6 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 z-10">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 text-white text-base font-medium  uppercase leading-tight"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 text-white text-base font-medium  uppercase leading-tight"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 text-white text-base font-medium  uppercase leading-tight"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 text-white text-base font-medium  uppercase leading-tight"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 text-white text-base font-medium  uppercase leading-tight"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
