"use client";
import Introduction from "@/components/skill/introdution";
import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { skillsData } from "../data/skillsData";
import { deploymentData } from "../data/deploymentData";
import { communicationData } from "../data/communicationData";
import { useStackDataState } from "../state/atoms";
type IconType = {
  component: React.ComponentType<{
    color: string;
    width: number | string;
    height: number | string;
  }>;
  color: string;
  width: number | string;
  height: number | string;
};

type SkillsData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  width: number | string;
  height: number | string;
  gauge: number;
};

export default function AboutMe() {
  const setClickStack = useSetRecoilState(useStackDataState);
  const [indexNum, setIndexNum] = useState(1);
  const skill: SkillsData[] = skillsData;
  const deployment: SkillsData[] = deploymentData;
  const cummuication: SkillsData[] = communicationData;

  const handleStack = (index: number, data: SkillsData) => {
    setIndexNum(index);
    setClickStack(data);
  };
  return (
    <section className="flex flex-col min-h-screen items-center justify-between pt-16 w-screen">
      <div className="flex w-screen h-screen">
        {" "}
        <article className="border-r border-[--color-main-002] border-opacity-55 relative w-1/3 h-screen">
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
                <span className="text-white text-opacity-45">1997.02.01</span>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">전화번호</span>
                <span className="text-white text-opacity-45">
                  010-8109-0731
                </span>
              </li>
              <li className="relative w-full flex justify-start gap-[4rem] py-3">
                <span className="w-[75px]">E-mail</span>
                <span className="text-white text-opacity-45">
                  sooknise@naver.com
                </span>
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
        <article className="bg-black border-r border-[--color-main-002] border-opacity-5 relative w-1/3 h-screen">
          <div className="w-full  px-[106px] py-[66px] flex flex-col gap-10">
            {" "}
            <h1 className="text-2xl">STACK</h1>
            <ul className="flex flex-wrap gap-3">
              {skill &&
                skill.map((item) => (
                  <li
                    key={item.index}
                    className={`skill-icon ${indexNum === item.index && `icon-click`} flex bg-white bg-opacity-20 text-white text-opacity-45 px-2 py-1 justify-center items-center gap-1 rounded-full border border-solid border-gray-500 cursor-pointer  hover:text-white`}
                    onClick={() => {
                      handleStack(item.index, item);
                    }}
                  >
                    {
                      React.createElement(item.icon.component, {
                        color: item.icon.color,
                        width: item.icon.width,
                        height: item.icon.height,
                      }) as React.ReactElement
                    }{" "}
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-full  px-[106px] py-[66px] flex flex-col gap-10">
            {" "}
            <h1 className="text-2xl">DEPLOYMENT</h1>
            <ul className="flex flex-wrap gap-3">
              {deployment &&
                deployment.map((item) => (
                  <li
                    key={item.index}
                    className={`skill-icon ${indexNum === item.index && `icon-click`} flex bg-white bg-opacity-20 text-white text-opacity-45 px-2 py-1 justify-center items-center gap-1 rounded-full border border-solid border-gray-500 cursor-pointer hover:text-white`}
                    onClick={() => {
                      handleStack(item.index, item);
                    }}
                  >
                    {
                      React.createElement(item.icon.component, {
                        color: item.icon.color,
                        width: item.icon.width,
                        height: item.icon.height,
                      }) as React.ReactElement
                    }{" "}
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-full  px-[106px] py-[66px] flex flex-col gap-10">
            {" "}
            <h1 className="text-2xl">COMMUNICATION</h1>
            <ul className="flex flex-wrap gap-3">
              {cummuication &&
                cummuication.map((item) => (
                  <li
                    key={item.index}
                    className={`skill-icon ${indexNum === item.index && `icon-click`} flex bg-white bg-opacity-20 text-white text-opacity-45 px-2 py-1 justify-center items-center gap-1 rounded-full border border-solid border-gray-500 cursor-pointer hover:text-white`}
                    onClick={() => {
                      handleStack(item.index, item);
                    }}
                  >
                    {
                      React.createElement(item.icon.component, {
                        color: item.icon.color,
                        width: item.icon.width,
                        height: item.icon.height,
                      }) as React.ReactElement
                    }{" "}
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article className="flex justify-start items-center relative w-1/3 h-screen">
          <Introduction />
        </article>
      </div>
    </section>
  );
}
