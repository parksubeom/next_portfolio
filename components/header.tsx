"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
  const [openGnb, setOpenGnb] = useState(false);
  return (
    <header className="flex flex-col w-screen h-16 max-h-32 min-h-16 bg-cover bg-center bg-[url('/background-main.png')] opacity-95 justify-center items-center fixed z-[1]">
      <div className="flex rel_width item-center justify-between text-3xl ">
        <Link href="/">
          <h1 className=" xl:text-2xl text-xl hover:text-[--color-sub-002]">
            BUM PORTFOLIO
          </h1>
        </Link>
        <nav className="lg:flex hidden xl:text-lg text-base w-1/2 justify-between items-center">
          <Link className="hover:text-[--color-sub-002]" href="/">
            HOME
          </Link>
          <Link className="hover:text-[--color-sub-002]" href="/about_me">
            ABOUT ME
          </Link>
          <Link className="hover:text-[--color-sub-002]" href="/project">
            PROJECT
          </Link>
          <Link className="hover:text-[--color-sub-002]" href="/">
            CARRER
          </Link>
        </nav>
        <nav className="lg:hidden flex xl:text-lg text-base w-1/2 justify-end items-center">
          <button
            className="text-3xl cursor-pointer"
            onClick={() => setOpenGnb(!openGnb)}
          >
            {" "}
            <FiAlignJustify />
          </button>
        </nav>
      </div>
      {openGnb ? (
        <header className="animate-slideDown lg:hidden ${openGnb ? flex : hidden} flex flex-col w-screen h-48 max-h-32 min-h-16 bg-cover bg-center bg-[url('/background-main.png')] opacity-99 justify-center items-center fixed top-[4rem] z-[1] an">
          <div className="flex rel_width item-center justify-start text-3xl ">
            <nav className="flex flex-col text-sm w-1/2 justify-between items-start gap-2">
              <Link
                className="hover:text-[--color-sub-002]"
                onClick={() => setOpenGnb(!openGnb)}
                href="/"
              >
                HOME
              </Link>
              <Link
                className="hover:text-[--color-sub-002]"
                onClick={() => setOpenGnb(!openGnb)}
                href="/about_me"
              >
                ABOUT ME
              </Link>
              <Link
                className="hover:text-[--color-sub-002]"
                onClick={() => setOpenGnb(!openGnb)}
                href="/project"
              >
                PROJECT
              </Link>
              <Link
                className="hover:text-[--color-sub-002]"
                onClick={() => setOpenGnb(!openGnb)}
                href="/"
              >
                CARRER
              </Link>
            </nav>
          </div>
        </header>
      ) : null}
    </header>
  );
}
