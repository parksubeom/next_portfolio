"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { useStackDataState } from "@/app/state/atoms";

const Introduction: React.FC = () => {
  const [clickStack] = useRecoilState(useStackDataState);

  return (
    <div
      key={clickStack.index}
      className="md:px-[70px] md:py-[70px] px-[30px] py-[30px] flex flex-col justify-center items-center gap-8"
    >
      <div className="flex justify-center items-center stack-icon text-[10rem] xl:text-[16rem] animate-iconani">
        {
          React.createElement(clickStack.icon.component, {
            color: clickStack.icon.color,
            width: clickStack.icon.width,
            height: clickStack.icon.height,
          }) as React.ReactElement
        }
      </div>
      <span className="stack-name text-4xl text-white">{clickStack.name}</span>
      <div className="relative w-1/3 min-w-[280px] xl:w-full mt-6">
        <progress
          className="progress-bar"
          value={clickStack.gauge}
          max="100"
        ></progress>
        <span className="progress-text">{clickStack.gauge}%</span>
      </div>
      <div className="relative w-1/3 min-w-[280px] xl:w-full mt-6">
        <p className="stack-intro mt-8">{clickStack.contents}</p>
      </div>
    </div>
  );
};

export default Introduction;
