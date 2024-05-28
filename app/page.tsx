import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col rel_width justify-center items-center gap-60">
        <div className="flex flex-col gap-10">
          <h1 className="text-8xl text-center">
            <span className="font-semibold animate-identifier">S</span>
            <span className="font-semibold animate-identifier2 ">U</span>
            <span className="font-semibold animate-identifier3 ">B</span>
            <span className="font-semibold animate-identifier4 ">E</span>
            <span className="font-semibold animate-identifier5 ">O</span>
            <span className="font-semibold animate-identifier6 ">M</span>
            <br />
            <span className="font-semibold animate-identifier7 ">P</span>
            <span className="font-semibold animate-identifier8 ">O</span>
            <span className="font-semibold animate-identifier9 ">R</span>
            <span className="font-semibold animate-identifier10 ">T</span>
            <span className="font-semibold animate-identifier11 ">F</span>
            <span className="font-semibold animate-identifier12 ">O</span>
            <span className="font-semibold animate-identifier13 ">L</span>
            <span className="font-semibold animate-identifier14 ">I</span>
            <span className="font-semibold animate-identifier15 ">O</span>
          </h1>
          <h2 className="text-lg font-thin text-center">
            오너십을 가지고 서비스를 개발하는 프론트엔드 개발자 박수범 입니다.
            <br />
            내가 직접 기여한 서비스가 누군가의 불편함을 덜어 줄 수 있다고
            생각하며,
            <br /> 그러한 서비스를 현실로 구현할 수 있는{" "}
            <span className="text-[--color-sub-002] underline decoration-dotted underline-offset-4">
              프론트엔드 개발자
            </span>
            가 되고자합니다.
          </h2>
        </div>
        <article className="flex relative justify-center w-1/2 h-300">
          <img
            className="animate-movingimage absolute clip-path"
            src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png"
            alt="메인 이미지"
          />
          <img
            className="animate-movingimage2 absolute clip-path2"
            src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png"
            alt="메인 이미지"
          />
          <img
            className="animate-movingimage3 absolute clip-path3"
            src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png"
            alt="메인 이미지"
          />
          <img
            className="animate-movingimage4 absolute clip-path4"
            src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png"
            alt="메인 이미지"
          />
          <img
            className="animate-movingimage5 absolute clip-path5"
            src="https://mscojl24.github.io/jb-portfolio-v2/asset/image/main-image.png"
            alt="메인 이미지"
          />
        </article>
      </section>
    </>
  );
}
