import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-column">
        <div>
          <h1 className="text-center">
            <span className="text-8xl animate-spin">S</span>
            <span className="text-8xl animate-spin">U</span>
            <span className="text-8xl animate-spin">B</span>
            <span className="text-8xl animate-spin">E</span>
            <span className="text-8xl animate-spin">O</span>
            <span className="text-8xl animate-spin">M</span>
            <br />
            <span className="text-8xl animate-spin">P</span>
            <span className="text-8xl animate-spin">O</span>
            <span className="text-8xl animate-spin">R</span>
            <span className="text-8xl animate-spin">T</span>
            <span className="text-8xl animate-spin">F</span>
            <span className="text-8xl animate-spin">O</span>
            <span className="text-8xl animate-spin">L</span>
            <span className="text-8xl animate-spin">I</span>
            <span className="text-8xl animate-spin">O</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
