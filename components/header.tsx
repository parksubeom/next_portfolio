import React from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex w-screen h-16 bg-cover bg-center bg-[url('/background-main.png')] opacity-95 justify-center items-center fixed z-[1]">
      <div className="flex rel_width item-center justify-between text-3xl">
        <Link href="/">
          <h1 className=" xl:text-2xl text-xl">BUM PORTFOLIO</h1>
        </Link>
        <nav className="lg:flex hidden xl:text-lg text-base w-1/2 justify-between items-center">
          <Link href="/">HOME</Link>
          <Link href="/about_me">ABOUT ME</Link>
          <Link href="/project">PROJECT</Link>
          <Link href="/">CARRER</Link>
        </nav>
        <nav className="lg:hidden flex xl:text-lg text-base w-1/2 justify-end items-center">
          <button className="text-3xl">
            {" "}
            <FiAlignJustify />
          </button>
        </nav>
      </div>
    </header>
  );
}
