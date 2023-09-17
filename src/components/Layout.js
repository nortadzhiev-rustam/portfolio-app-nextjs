import React from "react";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`w-full h-full inline-block bg-light p-32 dark:bg-dark z-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-4 
      ${className}`}>
      {children}
    </div>
  );
}
