type ProjectData = {
  index: number;
  title: string;
  date: string;
  image: string[];
  description: string;
  mainfunction: string;
  github: string;
  url: string;
  stack: string;
  deployment: string;
};
export const corpProjectData: ProjectData[] = [
  {
    index: 1,
    title: "SSEM 홈페이지 리뉴얼",
    date: "2024-05 ~ 2023-06 (프론트엔드 담당)",
    image: [
      "/ssem_img/ssem_main.png",
      "/ssem_img/ssem_info.png",
      "/ssem_img/ssem_faq.png",
      "/ssem_img/ssem_chatbot.png",
    ],
    description: `
    회사의 앱버전 서비스의 사용자가 윈도우 버전보다 압도적으로 많아짐에 따라 회사 웹페이지의 모바일 사용자 방문이 늘어났습니다. 이에 발맞춰 데스크탑부터 모바일 디바이스까지 자연스럽고 편안한 사용자 경험을 주기위해 서비스 홈페이지를 리뉴얼하게 됐습니다. `,
    mainfunction:
      "faq 챗봇과 대화, 디바이스 타입을 윈도우 서비스와 앱 서비스를 판별하여 다운로드 진행, 2580px - 360px 사이즈에 대한 반응형 웹 ",
    github: "(SVN)사내 레포지토리",
    url: "https://ssem.kr/",
    stack: "자체프레임워크 (Javascript,제이쿼리 기반)",
    deployment: "사내서버",
  },
  {
    index: 2,
    title: "SSEM 운영반영 시스템",
    date: "2023-04 ~ 2023-05 (프론트엔드 담당)",
    image: [
      "/sdlc_img/sdlc0.png",
      "/sdlc_img/sdlc1.png",
      "/sdlc_img/sdlc2.png",
      "/sdlc_img/sdlc3.png",
    ],
    description:
      "일하게 된 회사가 보안상의 이유로 Github 등 형상관리,버전관리 툴을 사용하지 않고 작업파일을 엑셀을통해 수기로 반영을 진행하고 있었습니다. 이러한 개발방식은 파일을 운영서버에 배포하는 과정에서 휴먼에러가 종종 발생했고 그런 불편함과 리스크를 개선하고자 진행하게 된 프로젝트 입니다.",
    mainfunction:
      "SVN 커밋로그 불러오기, 버전변경, 반영승인 시 해당파일 쉘스크립트가 읽을 수 있게 데이터 생성, 진행상황 시각화",
    github: "(SVN)사내 레포지토리",
    url: "",
    stack: "자체프레임워크 (Javascript,제이쿼리 기반)",
    deployment: "사내서버",
  },
];
