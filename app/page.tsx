"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col rel_width justify-center items-center py-52 gap-48">
        <div className="flex flex-col gap-10">
          <h1 className="sm:text-title text-6xl text-center">
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
            <p>
              오너십을 가지고 서비스를 개발하는 프론트엔드 개발자 박수범 입니다.
            </p>
            <p>
              {" "}
              내가 직접 기여한 서비스가 누군가의 불편함을 덜어 줄 수 있다고
              생각하며,
            </p>
            <p>
              {" "}
              그러한 서비스를 현실로 구현할 수 있는{" "}
              <span className="text-[--color-sub-002] underline decoration-dotted underline-offset-4">
                프론트엔드 개발자
              </span>
              가 되고자합니다.
            </p>
          </h2>
        </div>
        <article className="flex relative justify-center w-2/3 max-w-[800px] sm:h-[400px] h-[230px] ">
          <Image
            className="animate-movingimage absolute clip-path"
            src="/moon.jpg"
            alt="메인 이미지"
            fill
          />
          <Image
            className="animate-movingimage2 absolute clip-path2"
            src="/moon.jpg"
            alt="메인 이미지"
            fill
          />
          <Image
            className="animate-movingimage3 absolute clip-path3"
            src="/moon.jpg"
            alt="메인 이미지"
            fill
          />
          <Image
            className="animate-movingimage4 absolute clip-path4"
            src="/moon.jpg"
            alt="메인 이미지"
            fill
          />
          <Image
            className="animate-movingimage5 absolute clip-path5"
            src="/moon.jpg"
            alt="메인 이미지"
            fill
          />
        </article>
        <article className="text-center flex flex-col gap-16">
          <h1 className="md:text-sub-title text-4xl text-center">
            내가 생각하는 함께
            <br /> 일하고 싶은 개발자는?
          </h1>
          <p className="text-gray-300">
            <span>
              깔끔한 UI를 만들고, 예쁘게 꾸미는 것이 프론트엔드 개발자에게 가장
              중요할까요?
            </span>
            <br></br>
            <span>
              물론 중요한 능력이지만 짧게나마 실무를 경험해보면서 느낀점은
              달랐습니다.
            </span>
            <br></br>
            <span>
              제가 생각하기에 가장 중요한 역량은 서비스를 같이 만들어가는 <br />
              <span className="text-[--color-sub-002] underline decoration-dotted underline-offset-4">
                팀원과의 협력과 소통
              </span>
              이라고 생각합니다.
            </span>
          </p>
          <p className="text-gray-300">
            <span>회사에는 혼자하는일이 없다고 생각하며 웹/앱 서비스는</span>
            <br />
            <span>
              디자이너,기획자,백엔드개발자 모두가 함께 만들어가는 것 입니다.
            </span>
            <br />
            <span>
              저는 이러한 협업의 중요성을 알고, 소통하고 싶은 개발자가 되기위해
            </span>
            <br />
            <span>
              <Link
                className="text-[--color-sub-002] underline decoration-dotted underline-offset-4"
                href="/"
              >
                3개의 사이드 프로젝트
              </Link>
              와{" "}
              <Link
                className="text-[--color-sub-002] underline decoration-dotted underline-offset-4"
                href="/"
              >
                2번의 회사 프로젝트
              </Link>
              를 통해 다양한 웹,하이브리드웹 등을 제작해보며
            </span>
            <br />
            <span>
              브라우저의 제작 과정과 구조를 이해하였으며, 서로 소통하고 협업하는
              과정을 배워갔습니다.
            </span>
          </p>
          <p className="text-gray-300">
            <span>
              그저 단순히 구현을 잘하는 개발자가 아닌, 제가 함께 할 회사에서도
              지금까지 진행해 왔던
            </span>
            <br />
            <span>
              프로젝트와 같이 팀원들과 함께 소통하고 열정적으로 임하여
              사용자에게 조금 더
            </span>
            <br />
            <span className="text-[--color-sub-002] underline decoration-dotted underline-offset-4">
              편리하고 interactive한 사용감을 줄 수 있는 프론트엔드 개발자가
              되고 싶습니다.
            </span>
          </p>
        </article>
        <div className="flex flex-col text-center justify-center gap-8 w-[85vw]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-2xl">Side Project</h1>
            <Link href="/project">
              {" "}
              <button className="w-[150px] justify-center items-center border-solid border-2 border-s-teal-800-600 rounded-full px-1 py-1">
                more
              </button>
            </Link>
          </div>
          <ul className="flex flex-col justify-center items-center gap-8">
            <li className="w-full flex flex-col sm:flex-row justify-start bg-white bg-opacity-10 px-6 py-6 rounded-xl shadow-xl gap-12">
              <img
                alt="프로젝트이미지"
                className="sm:w-36 sm:h-[88px] h-[45vw] rounded-xl"
                src="/uncover.png"
              />
              <div className="flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl font-semibold">UNCOVER</h2>
                <p className="text-md">노카피라이트 음원 스트리밍 서비스</p>
              </div>
            </li>
            <li className="w-full flex flex-col sm:flex-row justify-start bg-white bg-opacity-10 px-6 py-6 rounded-xl shadow-xl gap-12">
              <img
                alt="프로젝트이미지"
                className="sm:w-36 sm:h-[88px] h-[45vw] rounded-xl"
                src="/ticat.png"
              />
              <div className="flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl font-semibold">TICAT</h2>
                <p className="text-md">전국 축제안내 서비스</p>
              </div>
            </li>
            <li className="w-full flex flex-col sm:flex-row justify-start bg-white bg-opacity-10 px-6 py-6 rounded-xl shadow-xl gap-12">
              <img
                alt="프로젝트이미지"
                className="sm:w-36 sm:h-[88px] h-[45vw] rounded-xl"
                src="/anischool.gif"
              />
              <div className="flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl font-semibold">ANI-SCHOOL</h2>
                <p className="text-md">캐릭터 프로필이미지 생성 서비스</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center justify-center gap-8 w-[85vw]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-2xl">Company Project</h1>
            <Link href="/project">
              {" "}
              <button className="w-[150px] justify-center items-center border-solid border-2 border-s-teal-800-600 rounded-full px-1 py-1">
                more
              </button>
            </Link>
          </div>
          <ul className="flex flex-col gap-8">
            <li className="w-full flex flex-col sm:flex-row justify-start bg-white bg-opacity-10 px-6 py-6 rounded-xl shadow-xl gap-12">
              <img
                alt="프로젝트이미지"
                className="sm:w-36 sm:h-[88px] h-[45vw] rounded-xl"
                src="/ssem.png"
              />
              <div className="flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl font-semibold">SSEM 홈페이지 리뉴얼</h2>
                <p className="text-md">
                  100만 세금신고 앱 SSEM 홈페이지 리뉴얼
                </p>
              </div>
            </li>
            <li className="w-full flex flex-col sm:flex-row justify-start bg-white bg-opacity-10 px-6 py-6 rounded-xl shadow-xl gap-12">
              <img
                alt="프로젝트이미지"
                className="sm:w-36 sm:h-[88px] h-[45vw] rounded-xl"
                src="/moa.png"
              />
              <div className="flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl font-semibold">
                  모아프렌즈 어드민 대시보드
                </h2>
                <p className="text-md">
                  회사 서비스의 각종 지표를 모아볼 수 있는 대시보드
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
