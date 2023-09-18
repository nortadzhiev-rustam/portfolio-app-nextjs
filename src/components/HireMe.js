import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
const HireMe = () => {
  return (
    <div className='fixed z-20 left-4 bottom-4 md:right-4 md:top-0 md:left-auto md:bottom-auto 
     md:absolute flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className='fill-dark animate-spin-slow
        dark:fill-light
        ' />
        <Link
          href='mailto:rustamnortojiyev@gmail.com'
          target={"_blank"}
          className='flex items-center justify-center
          absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
          bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
          font-semibold hover:text-dark hover:bg-light
          dark:bg-light dark:text-dark dark:border-light
          dark:hover:text-light dark:hover:bg-dark 
          md:w-12 md:h-12 md:rounded-full md:text-[10px]
          '
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
