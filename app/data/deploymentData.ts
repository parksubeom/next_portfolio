import React from "react";
import { FaAws } from "react-icons/fa";
import { SiGithubpages } from "react-icons/si";
import { SiPwa } from "react-icons/si";
import { SiVercel } from "react-icons/si";

type IconType = {
  component: React.ComponentType<{ color: string }>;
  color: string;
};

type DeployMentData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  gauge: number;
};

export const deploymentData: DeployMentData[] = [
  {
    index: 14,
    name: "AWS S3",
    icon: { component: FaAws, color: "#FF8C00" },
    contents: "AWS S3를 통해 프로젝트의 정적배포를 진행해봤습니다.",
    color: "#007acc",
    gauge: 80,
  },
  {
    index: 15,
    name: "AWS CloudFront",
    icon: { component: FaAws, color: "#8A2BE2" },
    contents:
      "AWS CloudFront를 통해 배포된 서비스의 성능향상과, 보안을 향상시켰습니다.",
    color: "#0ace82",
    gauge: 70,
  },
  {
    index: 16,
    name: "Github Pages",
    icon: { component: SiGithubpages, color: "#000" },
    contents:
      "소규모 프로젝트의 경우 GitHub Pages를 이용한 정적배포를 사용했습니다. Github Action을 사용한 자동 배포가 가능하다는 장점이 있었습니다. ",
    color: "#ccc",
    gauge: 100,
  },
  {
    index: 17,
    name: "PWA",
    icon: { component: SiPwa, color: "#5a0fc8" },
    contents:
      "실제 사용자의 트래픽을 받아보고 싶었고 CSR의 검색노출 어려움이란 단점을 극복하고자, PWA를 통해 마켓 배포를 위해 사용했습니다.",
    color: "#5a0fc8",
    gauge: 50,
  },
  {
    index: 18,
    name: "VERCEL",
    icon: { component: SiVercel, color: "#000" },
    contents:
      "Next.js 프로젝트에 최적화되어 있고, 간편한 설정과 자동화된 ci/cd 파이프라인이 매력적으로 다가와서 사용해봤습니다..",
    color: "#5a0fc8",
    gauge: 70,
  },
];
