import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="z-[999] relative">
        <div
          className="fixed flex mx-auto right-0 left-0 top-12 h-[3.25rem] w-[30rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        >
          <div className="flex w-full items-center justify-evenly px-3 py-3">
            <Link className="hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={"#bruh"}>Home</Link>
            <Link className="hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={"#bruh"}>About</Link>
            <Link className="hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={"#bruh"}>Projects</Link>
            <Link className="hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={"#bruh"}>Contact</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
