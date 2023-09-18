import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterX, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";

import useThemeSwithcer from "./hooks/useThemeSwithcer";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block  bg-dark dark:bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustoMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-light dark:bg-dark  absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function NavBar() {
  const [mode, setMode] = useThemeSwithcer();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex dark:text-light justify-between relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='hidden lg:flex flex-col justify-center items-center'
        onClick={handleMenuOpen}
      >
        <sapn
          className={`bg-dark dark:bg-light h-0.5 w-6 transition-all duration-300 ease-in-out rounded-sm  ${
            isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></sapn>
        <sapn
          className={`bg-dark dark:bg-light h-0.5 w-6 transition-all duration-300 ease-in-out rounded-sm my-0.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></sapn>
        <sapn
          className={`bg-dark dark:bg-light h-0.5 w-6 transition-all duration-300 ease-in-out rounded-sm  ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></sapn>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          <CustomLink href='#' title='Articles' className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href='https://twitter.com/rnortadzhiev'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3'
          >
            <TwitterX className='text-xs  dark:fill-light' />
          </motion.a>
          <motion.a
            href='https://github.com/nortadzhiev-rustam'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/rustam-nortadzhiev/'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 ml-3'
          >
            <LinkedInIcon />
          </motion.a>
          {/* <Link href='/' target={"_blank"}>
          T
        </Link>
        <Link href='/' target={"_blank"}>
          T
        </Link>
        <Link href='/' target={"_blank"}>
          T
        </Link> */}

          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}
        
        `}
          >
            {mode === "dark" ? (
              <SunIcon className='fill-dark max-w-[1.25rem] max-h-5' />
            ) : (
              <MoonIcon className='fill-dark max-w-[1.25rem] max-h-5' />
            )}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[60vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
        bg-dark/90 dark:bg-light/75  rounded-lg backdrop-blur-md py-32
        '
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustoMobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleMenuOpen}
            />
            <CustoMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleMenuOpen}
            />
            <CustoMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleMenuOpen}
            />
            <CustoMobileLink
              href='/articles'
              title='Articles'
              className=''
              toggle={handleMenuOpen}
            />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a
              href='https://twitter.com/rnortadzhiev'
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mr-3'
            >
              <TwitterX className='text-xs  dark:fill-dark fill-light' />
            </motion.a>
            <motion.a
              href='https://github.com/nortadzhiev-rustam'
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-3 text-light dark:text-dark'
            >
              <GithubIcon className='fill-light dark:fill-dark' />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/rustam-nortadzhiev/'
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 ml-3 '
            >
              <LinkedInIcon className='fill-light dark:fill-dark' />
            </motion.a>
            {/* <Link href='/' target={"_blank"}>
            T
          </Link>
          <Link href='/' target={"_blank"}>
            T
          </Link>
          <Link href='/' target={"_blank"}>
            T
          </Link> */}

            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 max-h-24
          ${mode === "dark" ? "bg-dark text-text-light" : "bg-light text-dark"}
          
          `}
            >
              {mode === "dark" ? (
                <SunIcon className='fill-dark max-w-[1.25rem] max-h-5' />
              ) : (
                <MoonIcon className='fill-dark max-w-[1.25rem] max-h-5' />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className='absolute left-[50%] top-2 translate-x-[-5]'>
        <Logo />
      </div>
    </header>
  );
}
