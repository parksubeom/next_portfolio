type ProjectData = {
  index: number;
  title: string;
  date: string;
  image: string[];
  description: string;
  mainfunction: string;
  github: string;
  url: string;
  detail: string;
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
    <p>
          전국에서 진행 또는 예정된 축제를 찾아보거나 캘린더에 등록하고, 다녀와서 스탬프까지 보상으로 제공하는
          서비스입니다. <span class="red_text">반응형 css</span> 및 <span class="red_text">Animation 동작구현</span>과 함께 전반적인 UI/UX 구축을
          담당했으며, <span class="red_text">kakao map API</span> 를 이용한 지도 안내 서비스 및 상세페이지, 캘린더 페이지,
          <span class="red_text">날씨 API</span> 를 통한 서비스 축제위치 날씨 제공 등을 도맡아 진행하였습니다.
        </p>
        <p>
          <span class="red_text">PWA</span>를 통해 빌드해보면서 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과 확장성을 몸소
          체감할 수 있었습니다.
        </p>`,
    mainfunction:
      "원하는 지역 축제 찾기,내 주변 축제 찾기,축제 일정 캘린더 등록하기,현재 내 위치에서 축제장소 길 찾기,축제 상세정보 및 관련된 축제 추천,해당축제와 일정거리이상 가까워지면 스탬프찍기 활성화",
    github: "https://github.com/parksubeom/ticat-client",
    url: "https://d99pqcn6hzkdg.cloudfront.net/",
    detail:
      "https://fuchsia-kettle-64f.notion.site/2cd44dee6b6545869fd2e7e55007c67f?v=52c763cdf8dc4a1f9a77e54d24f7c4f6&p=fb28da26c60f47f3bdcba2cf8ec6aa2b&pm=c",
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
    description: `<p>
          저작권이 없는 노카피라이트 음원을 스트리밍 할 수 있으며,자신만의 플레이리스트를 만들어서 다른사람들과 공유할
          수 있는 스트리밍 서비스입니다. 이론만 들어 감이 오지않던 <span class="red_text">타입스크립트</span>를 직접 도입해 본 첫
          프로젝트이며, 이외에도 전역상태관리, <span class="red_text">OAuth 2.0</span> 등의 개념을 한 번 더 깊게 다질 수 있었습니다.
          스타일드 컴포넌트를 이용하여 <span class="red_text">재사용성 높은 스타일드컴포넌트를 설계</span>를 해 볼 수 있었고,
          <span class="red_text">동적 스타일링 및 조건부 스타일링</span>을 경험하면서 좋은 UI/UX에 대해 고민하는 계기도 되었습니다. 어떤
          기능을 구현하냐보다, 사용자의 사용성에 집중해보며 유저친화적인 서비스를 설계하기위해 고민할 수 있었던 좋은
          기회였다고 생각합니다.
        </p>`,
    mainfunction:
      "음원 스트리밍,음원 다운로드,음원 태그에 따라 분류 및 서칭,플레이리스트 CRUD플레이리스트 댓글 CRUD,음원이 영상에 어울리는지 핏을 확인하는 믹싱페이지",
    github: "https://github.com/codestates-seb/seb43_main_017",
    url: "",
    detail:
      "https://fuchsia-kettle-64f.notion.site/2cd44dee6b6545869fd2e7e55007c67f?v=52c763cdf8dc4a1f9a77e54d24f7c4f6&p=ae347026c2ef4072a548c7255cd7a883&pm=c",
    stack: "React, TypeScript, Recoil, Styled-components, axios",
    deployment: "AWS S3, AWS CloudFront",
  },
  {
    index: 3,
    title: "ANISCHOOL (캐릭터 프로필이미지 생성 서비스)",
    date: "2023-03 (개인 프로젝트)",
    image: [
      "/anischool_img/075.png",
      "/anischool_img/076.png",
      "/anischool_img/077.png",
      "/anischool_img/078.png",
    ],
    description: ` <p>
    프로필 업로드에 얼굴을 공개하기 꺼려워하는 사람들을 위한 서비스로, 귀여운 동물 이미지를 생성하는
    프로젝트입니다. 프론트엔드 개발과 캐릭터 디자인 기획에 참여하여, 랜덤 요소 적용, 레어 요소 설정, 이미지 저장
    등의 기능을 구현했습니다. 주요 개발과정은 블로그에 공유되어 있으며,
    <span class="red_text">프로젝트를 통해 전반적인 성능 최적화</span>를 진행했습니다. 코드 최적화와 리소스 최적화를 통해
    <span class="red_text">라이트하우스 성능 개선</span>을 달성하고, 사용자 중심의 디자인을 강조하며 프로젝트 성과로는
    <span class="red_text">200명 이상의 실제 사용자 경험과 37건의 피드백, 유지보수 경험</span>을 얻었습니다. 특히, 사용자
    입장에서의 개발 고민을 통해 <span class="red_text">팀원과의 커뮤니케이션</span>과 고객 니즈 파악의 중요성을 깨달았습니다.
  </p>`,
    mainfunction:
      "랜덤한 캐릭터 이미지 생성, 파츠별 이미지 변경, 랜덤버튼 클릭 시, 일정확률로 레어요소 등장, 프로필이미지 png파일로 내려받기",
    github: "https://github.com/parksubeom/Ani_School",
    url: "https://parksubeom.github.io/Project_RetroAnimal_Generator/",
    detail:
      "https://fuchsia-kettle-64f.notion.site/2cd44dee6b6545869fd2e7e55007c67f?v=52c763cdf8dc4a1f9a77e54d24f7c4f6&p=57ec321ee8a14fee98061253b099fae6&pm=c",
    stack: "React, Recoil, 외부 스타일시트",
    deployment: "Git pages",
  },
];
