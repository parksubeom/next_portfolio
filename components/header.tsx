import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-screen h-16 bg-cover bg-center bg-[url('/background-main.png')] opacity-95 justify-center items-center fixed z-[1]">
      <div className="flex rel_width item-center justify-between text-3xl">
        <Link href="/">
          <h1>BUM PORTFOLIO</h1>
        </Link>
        <nav className="flex text-lg w-1/2 justify-between">
          <Link href="/">HOME</Link>
          <Link href="/about_me">ABOUT ME</Link>
          <Link href="/project">PROJECT</Link>
          <Link href="/">CARRER</Link>
        </nav>
      </div>
    </header>
  );
}
