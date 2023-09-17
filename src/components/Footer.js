import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer
        className='w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light
      sm:text-base
      '
      >
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className='flex items-center'>
            <Link href='/'>Build With ❤️ By Rustam Nortadzhiev</Link>
          </div>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;
