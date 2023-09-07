import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterX, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block  bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='https://twitter.com/rnortadzhiev'
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <TwitterX className='text-xs' />
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
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-5]'>
        <Logo />
      </div>
    </header>
  );
}
