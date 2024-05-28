import Image from "next/image";
import React from "react";
export default function AboutMe() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-between pt-16 w-screen">
      <div className="flex w-screen h-screen">
        {" "}
        <article className="border-r border-[--color-main-002] relative w-1/3 h-screen">
          <div className="w-full  px-[106px] py-[66px]">
            <h3 className="text-gray-300 font-medium opacity-50">
              오너십을 가지고 개발하는 프론트엔드 개발자
            </h3>
            <h1 className="font-bold text-sub-title">박수범</h1>
          </div>
          <div className="w-full h-[500px] px-[106px] py-[66px]">
            <ul className="flex flex-col w-full h-full">
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">생년월일</span>
                <span className="opacity-50">1997.02.01</span>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">전화번호</span>
                <span className="opacity-50">010-8109-0731</span>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">E-mail</span>
                <span className="opacity-50">sooknise@naver.com</span>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">이력서</span>
                <a
                  className="text-[--color-sub-002] opacity-80"
                  href="https://fuchsia-kettle-64f.notion.site/c150267c535647239be2da8b28a292cd?pvs=25/"
                  target="_blank"
                >
                  이력서주소
                </a>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">github</span>
                <a
                  className="text-[--color-sub-002] opacity-80"
                  href="https://github.com/parksubeom/"
                  target="_blank"
                >
                  깃허브주소
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="bg-black border-r border-[--color-main-002] relative w-1/3 h-screen"></article>
        <article className=" relative w-1/3 h-screen"></article>
      </div>
    </section>
  );
}
