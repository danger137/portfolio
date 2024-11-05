import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden fixed left-4 bottom-4 md:right-2 sm:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute ">
      <div className="flex items-center justify-center relative w-40 md:w-24 h-auto">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:dangerchamp2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 
          -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-primaryDark dark:border-primary
          h-20 w-20 rounded-full font-semibold text-sm hover:bg-light hover:text-dark hover:border-primary
           dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-primaryDark
           md:w-12 md:h-12 md:text-[9px]
          "
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
