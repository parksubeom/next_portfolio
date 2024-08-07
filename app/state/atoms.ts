import { atom } from "recoil";
import { FaHtml5 } from "react-icons/fa";

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

type StackData = {
  ket?: string;
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  width: number | string;
  height: number | string;
  gauge: number;
};

export const usePageNumberState = atom({
  key: "pageNumber",
  default: 1,
});

export const useStackDataState = atom<StackData>({
  key: "skillData",
  default: {
    index: 1,
    name: "Html",
    icon: {
      component: FaHtml5,
      color: "#f16528",
      width: "16rem",
      height: "16rem",
    },
    contents:
      "표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있어요.",
    color: "#f16528",
    width: "16rem",
    height: "16rem",
    gauge: 100,
  },
});
