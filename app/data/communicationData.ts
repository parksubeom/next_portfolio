import React from "react";
import { CgFigma } from "react-icons/cg";
import { BiLogoDiscord } from "react-icons/bi";
import { SiNotion, SiPostman, SiGithub } from "react-icons/si";

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

type CommunicationData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  width: number | string;
  height: number | string;
  gauge: number;
};

export const communicationData: CommunicationData[] = [
  {
    index: 19,
    name: "Discord",
    icon: {
      component: BiLogoDiscord,
      color: "#7B68EE",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "디스코드 봇을 활용하여 레포지토리의 커밋기록을 명시적으로 기록하고, 채팅,음성통화,화면공유 등 실시간 커뮤니케이션에 최적화 된 협업을 경험했습니다.",
    color: "#7B68EE",
    width: "16rem",
    height: "16rem",
    gauge: 100,
  },
  {
    index: 20,
    name: "Figma",
    icon: {
      component: CgFigma,
      color: "#0ace82",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "Figma를 통해 간단한 프로토타입을 작성하고 테스트할 수 있는 기능을 제공 가능합니다.",
    color: "#0ace82",
    width: "16rem",
    height: "16rem",
    gauge: 90,
  },
  {
    index: 21,
    name: "Notion",
    icon: {
      component: SiNotion,
      color: "#000000",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "Notion을 통한 팀원들과의 소통, 프로젝트 문서 및 일정 등을 관리했습니다.",
    color: "#ccc",
    width: "16rem",
    height: "16rem",
    gauge: 100,
  },
  {
    index: 22,
    name: "Postman",
    icon: {
      component: SiPostman,
      color: "#f34e1e",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "백엔드와의 협업을 위해 Postman을 통한 API 테스트를 진행하며, 빠르게 문제점을 개선했습니다.",
    color: "#f34e1e",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
  {
    index: 23,
    name: "Git hub",
    icon: {
      component: SiGithub,
      color: "#000000",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "소스 코드의 변경 이력을 효과적으로 관리하고, 이슈와 칸반을 사용하여 프로젝트의 진행상황을 체크했습니다.",
    color: "#ccc",
    width: "16rem",
    height: "16rem",
    gauge: 80,
  },
];
