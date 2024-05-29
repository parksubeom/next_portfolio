import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GiBearFace } from "react-icons/gi";
import { TbBrandReact } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiStyledcomponents,
  SiAxios,
  SiRecoil,
  SiEslint,
  SiPrettier,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"; // 사용하는 아이콘들을 모두 불러왔습니다.

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

export const skillsData: SkillsData[] = [
  {
    index: 1,
    name: "Html",
    icon: {
      component: FaHtml5,
      color: "#f16528",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있습니다.",
    color: "#f16528",
    width: "16rem",
    height: "16rem",
    gauge: 100,
  },
  {
    index: 2,
    name: "CSS",
    icon: {
      component: FaCss3Alt,
      color: "#0b74b8",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "media query와 keyframe animation 을 이용해 반응형 디자인을 적용하고, 동적인 애니메이션 효과를 추가할 수 있습니다.",
    color: "#0b74b8",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 3,
    name: "JavaScript",
    icon: {
      component: RiJavascriptFill,
      color: "#dab92c",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "JavaScript를 사용하여 동적이고 인터랙티브한 웹 페이지를 구현할 수 있습니다. 프레임워크 및 라이브러리를 활용하여 코드의 효율성과 유지보수성을 고려한 웹 애플리케이션을 개발경험이 있습니다.",
    color: "#dab92c",
    width: "16rem",
    height: "16rem",
    gauge: 70,
  },
  {
    index: 4,
    name: "React",
    icon: {
      component: TbBrandReact,
      color: "#61dafb",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "React를 사용하여 상태관리를 통해 재사용이 가능한 컴포넌트 기반의 웹 애플리케이션을 구축할 수 있습니다. 커스텀 훅 패턴에 관심이 많습니다.",
    color: "#61dafb",
    width: "16rem",
    height: "16rem",
    gauge: 85,
  },
  {
    index: 5,
    name: "Next",
    icon: {
      component: SiNextdotjs,
      color: "#000",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "SSR을 통해 보다 쾌적한 렌더링 환경을 구축할 수 있으며 서버컴포넌트와 클라이언트컴포넌트를 적절히 사용할 수 있습니다.",
    color: "#61dafb",
    width: "16rem",
    height: "16rem",
    gauge: 85,
  },
  {
    index: 6,
    name: "TypeScript",
    icon: {
      component: BiLogoTypescript,
      color: "#3179c7",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "변수, 함수, 객체 등에 대한 타입 주석을 명시적으로 작성하고, 타입 추론 기능을 활용하여 코드의 가독성을 향상시킬 수 있습니다. auto complete도 큰 장점으로 다가왔습니다. ",
    color: "#3179c7",
    width: "16rem",
    height: "16rem",
    gauge: 70,
  },
  {
    index: 7,
    name: "styled-component",
    icon: {
      component: SiStyledcomponents,
      color: "#f8c22f",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "컴포넌트 단위의 스타일 캡슐화를 통해 레이아웃 및 디자인을 쉽게 조작하고 유지보수성을 높였습니다. props를 통해 각 컴포넌트에 동적으로 스타일을 전달할 수 있습니다.",
    color: "#e89579",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 8,
    name: "tailwind",
    icon: {
      component: SiTailwindcss,
      color: "#61dafb",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "tailwind css 설정파일을 통해 커스터마이징할 수 있고, 테마, 색상 팔레트, 폰트, 브레이크포인트 등을 프로젝트에 맞게 정의할 수 있습니다.",
    color: "#e89579",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 9,
    name: "Recoil",
    icon: {
      component: SiRecoil,
      color: "#2a60df",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "Recoil을 통해 전역상태를 효과적으로 관리할 수 있으며, useRecoilStateLoadable 훅을 이용하여 상태에 따른 UI를 렌더링할 수 있습니다.",
    color: "#2a60df",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 10,
    name: "Zustand",
    icon: {
      component: GiBearFace,
      color: "#e69100",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "Zustand를 통해 전역상태를 효과적으로 관리할 수 있습니다. 프로젝트에 따라 recoil과 취사선택 가능합니다.",
    color: "#e69100",
    width: "16rem",
    height: "16rem",
    gauge: 60,
  },
  {
    index: 11,
    name: "Axios",
    icon: {
      component: SiAxios,
      color: "#5a29e4",
      width: "16rem",
      height: "16rem",
    },
    contents:
      " Axios를 활용하여 서버와의 HTTP 통신을 처리할 수 있으며, Restful API에 관심이 많습니다.",
    color: "#5a29e4",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 12,
    name: "ESlint",
    icon: {
      component: SiEslint,
      color: "#4b32c3",
      width: "16rem",
      height: "16rem",
    },
    contents: " ESLint를 통해 일관된 코드 컨벤션을 유지하려고 노력했습니다.",
    color: "#4b32c3",
    width: "16rem",
    height: "16rem",
    gauge: 60,
  },
  {
    index: 13,
    name: "Prettier",
    icon: {
      component: SiPrettier,
      color: "#56b3b4",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "Prettier의 설정을 통해 코드의 가독성을 향상시키고, 들여쓰기, 따옴표 사용 등과 같은 스타일 가이드를 자동으로 적용하여 코드의 일관성을 유지했습니다.",
    color: "#56b3b4",
    width: "16rem",
    height: "16rem",
    gauge: 60,
  },
];
