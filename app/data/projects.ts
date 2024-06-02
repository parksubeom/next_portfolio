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
export const projectData: ProjectData[] = [
  {
    index: 1,
    title: "TICAT (전국 축제안내 서비스)",
    date: "2023-07 ~ 2023-09 (5인 프로젝트)",
    image: [
      "/ticat_img/071.png",
      "/ticat_img/072.png",
      "/ticat_img/073.png",
      "/ticat_img/074.gif",
    ],
    description: `
    전국에서 진행 또는 예정된 축제를 찾아보거나 캘린더에 등록하고, 다녀와서 스탬프까지 보상으로 제공하는 서비스입니다. 반응형 css 및 Animation 동작구현과 함께 전반적인 UI/UX 구축을 담당했으며, kakao map API를 이용한 지도 안내 서비스 및 상세페이지, 캘린더 페이지, 날씨 API를 통한 서비스 축제위치 날씨 제공 등을 도맡아 진행하였습니다.
    PWA를 통해 빌드해보면서 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과 확장성을 몸소 체감할 수 있었습니다.
     현재 EC2 서버 문제로 API데이터가 넘어오고 있지 않기때문에, 추후에 백엔드 코드를 받아서 따로 배포시킬 계획입니다.`,
    mainfunction:
      "원하는 지역 축제 찾기,내 주변 축제 찾기,축제 일정 캘린더 등록하기,현재 내 위치에서 축제장소 길 찾기,축제 상세정보 및 관련된 축제 추천,해당축제와 일정거리이상 가까워지면 스탬프찍기 활성화",
    github: "https://github.com/parksubeom/ticat-client",
    url: "https://d99pqcn6hzkdg.cloudfront.net/",
    stack: "React, TypeScript, Zustand, Styled-components, React-query",
    deployment: "AWS S3, AWS CloudFront, PWA",
  },
  {
    index: 2,
    title: "UNCOVER (노카피라이트 음원 스트리밍 서비스)",
    date: "2023-05 ~ 2023-06 (6인 프로젝트)",
    image: [
      "/uncover_img/067.png",
      "/uncover_img/068.png",
      "/uncover_img/069.png",
      "/uncover_img/070.png",
    ],
    description:
      "저작권이 없는 노카피라이트 음원을 스트리밍 할 수 있으며, 자신만의 플레이리스트를 만들어서 다른 사람들과 공유할 수 있는 스트리밍 서비스입니다. 이론만 들어 감이 오지 않던 타입스크립트를 직접 도입해 본 첫 프로젝트이며, 이외에도 전역상태관리, OAuth 2.0 등의 개념을 한 번 더 깊게 다질 수 있었습니다. 스타일드 컴포넌트를 이용하여 재사용성 높은 스타일드 컴포넌트를 설계를 해 볼 수 있었고, 동적 스타일링 및 조건부 스타일링을 경험하면서 좋은 UI/UX에 대해 고민하는 계기도 되었습니다. 어떤 기능을 구현하냐보다, 사용자의 사용성에 집중해보며 유저친화적인 서비스를 설계하기 위해 고민할 수 있었던 좋은 기회였다고 생각합니다.",
    mainfunction:
      "음원 스트리밍,음원 다운로드,음원 태그에 따라 분류 및 서칭,플레이리스트 CRUD플레이리스트 댓글 CRUD,음원이 영상에 어울리는지 핏을 확인하는 믹싱페이지",
    github: "https://github.com/codestates-seb/seb43_main_017",
    url: "",
    stack: "React, TypeScript, Recoil, Styled-components, axios",
    deployment: "AWS S3, AWS CloudFront",
  },
  {
    index: 3,
    title: "ANI SCHOOL (캐릭터 프로필이미지 생성 서비스)",
    date: "2023-03 (솔로 프로젝트)",
    image: [
      "/anischool_img/075.png",
      "/anischool_img/076.png",
      "/anischool_img/077.png",
      "/anischool_img/078.png",
    ],
    description:
      "자신의 개성이 중요해진 요즘, 본인의 프로필을 업로드 해야 하지만 얼굴을 올리기 싫은 사람들을 위해 귀여운 동물 이미지를 만들어주는 서비스입니다. 부트캠프를 진행 할 당시 주로 디스코드를 통해 커뮤니케이션을 하고, 협업을 진행했었습니다.디스코드는 프로필사진을 업로드 가능했는데, 몇몇 동기들끼리 비슷한 프로필 아이콘을 설정해놓을 걸 발견했습니다. 이는 그들간의 친분을 나타낸다고 생각했고, 다르게 생각하면 이미 저들만의 무리가 형성됐다고 볼 수도 있었습니다. 특히나 협업을 주로 하게 될 부트캠프에서 여러 무리로 나뉘다보면 소통의 기회가 적어질것이라는 고민이 있었습니다.이러한 고민을 해결하기위해 같은 코스 동기들끼리 다같이 사용가능한 프로필이미지 생성기를 만들어서 공유한다면, 무리로 나뉘는게아닌 같은 기수 동기끼리 소속감을 가지지 않을까라는 생각에 개발을 마음먹게 되었습니다.",
    mainfunction:
      "랜덤한 캐릭터 이미지 생성, 파츠별 이미지 변경, 랜덤버튼 클릭 시, 일정확률로 레어요소 등장, 프로필이미지 png파일로 내려받기",
    github: "https://github.com/parksubeom/Ani_School",
    url: "https://parksubeom.github.io/Project_RetroAnimal_Generator/",
    stack: "React, Recoil, 외부 스타일시트",
    deployment: "Git pages",
  },
];
