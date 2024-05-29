"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { useStackDataState } from "@/app/state/atoms";

const Introduction: React.FC = () => {
  const [clickStack] = useRecoilState(useStackDataState);

  return (
    <div
      key={clickStack.index}
      className="flex items-center h-full w-full justify-center flex-col text-center text-white text-opacity-45 px-[106px]"
    >
      <div className="flex justify-center items-center stack-icon w-96 min-h-96 text-[16rem] animate-iconani">
        {
          React.createElement(clickStack.icon.component, {
            color: clickStack.icon.color,
            width: clickStack.icon.width,
            height: clickStack.icon.height,
          }) as React.ReactElement
        }
      </div>
      <span className="stack-name text-4xl">{clickStack.name}</span>
      <div className="stack-gauge mt-8 w-72 h-7 min-h-8 border-2 border-black rounded-full">
        <div
          className="gauge-box bg-black rounded-full text-xs text-white flex items-center justify-center h-full"
          style={{ width: `${clickStack.gauge}%` }}
        >
          {clickStack.gauge}%
        </div>
      </div>
      <div className="h-16">
        <p className="stack-intro mt-8">{clickStack.contents}</p>
      </div>
    </div>
  );
};

export default Introduction;
