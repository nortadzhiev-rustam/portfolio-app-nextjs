import React from "react";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`w-full h-full inline-block bg-light p-32 z-10 ${className}`}>
      {children}
    </div>
  );
}
