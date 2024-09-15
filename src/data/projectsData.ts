// data/projectsData.ts

export type Project = {
  title: string;
  date: string;
  titleDescription: string; // 새로 추가된 필드
  teamSize: string;
  member?: string;
  url?: string;
  git: string;
  description: string;
  tasks: string[];
  stack: string[];
  images: string[];
  feelings?: string; // 옵션 필드
};

export const projectsData: Project[] = [
  {
    title: "INJI’s portfolio",
    date: "2024.09.09 ~ 진행중",
    teamSize: "Personal",
    titleDescription: "개인 포트폴리오 사이트",
    git: "https://github.com/inji0212/PortFolio-Site",

    description: `개인 포트폴리오 사이트입니다.
      about, skills, project, contact을 통해 포트폴리오를 보다 편히 보여주기 위해 제작하였습니다.`,
    tasks: [
      ` 헤더 : progress bar로 현재 스크롤을 헤더에 표시하였고, 다크 모드, 반응형 drawer 버튼으로 사용자가 보다 사용하기 편하게 제작하였습니다.`,
      ` About : 저에 대해 소개를 하였으며 버튼 클릭 시 링크 이동 및 해당 위치로 스크롤 이동이 가능합니다.`,
      ` Skills : 개발 시 사용한 스킬들을 반응형으로 보여줍니다.`,
      ` Projects : 타이틀, 링크, 스킬,날짜 등 프로젝트의 데이터를 .ts에 넣어 사용하였습니다.
        - 이미지 슬라이더가 가능하며 검색기능( debounce )과 All, Personal, Team 필터로 원하는 프로젝트를 손쉽게 찾을 수 있습니다.
        - 카드 클릭 시 모달창( 이미지 슬라이더 기능 )이 나타납니다.`,
      `Contact : email.js로 실제로 send message버튼 클릭시 이메일 보낼 수있게 작업하였습니다.`,
      ` 배포 : vercel로 배포하였습니다.`,
    ],
    stack: ["Next.JS", "Tailwind.CSS", "TypeScript", "Vercel"],
    images: [
      "/img/projects/InjisPortFolio_1.png",
      "/img/projects/InjisPortFolio_2.png",
    ],
  },
  {
    title: " Component Factory",
    date: "2024.08.01 ~ 진행중",
    teamSize: "Team",
    titleDescription: "컴포넌트 라이브러리",
    url: "https://component-factory.org/",
    git: "https://github.com/component-f/component-factory",

    description: `컴포넌트 팩토리는 컴포넌트 라이브러리입니다.
    재사용가능한 컴포넌트 설명 및 예시로 사용자가 컴포넌트 사용시 보기 쉽고 뿐만 아니라 검색 기능을 통해 컴포넌트, 페이지 이동을 편히 하였습니다.`,
    member: `프론트엔드 4명`,

    tasks: [
      ` 검색 : 최근페이지, 전체 페이지 검색 및 이동이 가능합니다.
        - Local Storage를 이용해 최근 검색 기록 및 삭제 기능을 구현했습니다.`,
      ` 사이드바 : 반응형에 따라 작은 화면drawer메뉴버튼, 큰 화면 기본 사이드바로 나타납니다.
        - usePathname을 통해 현재 페이지를 나타냈습니다.`,
      ` 컴포넌트 페이지 : 컴포넌트를 코드 및 props로 사용 방법을 보여줍니다.
        - accordion, avatar, button, divider, drawer, switch를 만들었습니다.
        - 검색에 사용한 컴포넌트, slider 추가 및 다른 컴포넌트 주기적으로 업로드 할 예정입니다.`,
      ` Examples : 컴포넌트들을 이용해 만든 예시들을 모아둔 페이지입니다.
        - sign-up, cookie-settings, FNA 예시 컴포넌트 제작하였습니다.
`,
      ` 배포 : vercel 배포 완료하였고 aws 배포 및 npm 배포 시도 예정입니다.`,
    ],
    stack: ["Next.JS", "Tailwind.CSS", "TypeScript", "Vercel"],
    images: [
      "/img/projects/ComponentFactory_1.png",
      "/img/projects/ComponentFactory_2.png",
      "/img/projects/ComponentFactory_3.png",
      "/img/projects/ComponentFactory_4.png",
      "/img/projects/ComponentFactory_5.png",
      "/img/projects/ComponentFactory_7.png",
      "/img/projects/ComponentFactory_8.png",
    ],
  },
  {
    title: "Prier",
    date: "2024.05.22 ~ 2024.07.11",
    teamSize: "Team",
    git: "https://github.com/Coco-Das/PRIER-FE",

    titleDescription: "프로젝트 테스트, 피드백을 요약해주는 개발자 플랫폼 ",

    description: `프리어란 배포한 프로젝트를 테스트 및 피드백 요약을 받을 수 있는 개발자 플랫폼입니다.
    테스트뿐 아니라 개발자 커뮤니티로 소통의 창을 열어주며 테스트를 통해 얻은 코어(코인)으로 상점에서 물건을 기프트콘을 구매하실 수 있습니다.`,
    member: `프론트엔드 3명 + 백엔드 4명`,
    tasks: [
      ` 메인 페이지 : 스크롤에 따라 요소들이 나타나느 애니메이션을 적용하였고 사이드바 drawer 버튼을 사용했습니다.`,
      ` 개발자 커뮤니티 : 변동사항 있을 시 alert창이 뜨게 설정하였습니다.
        - 게시물 작성, 수정 페이지
            텍스트 편집기능과 하이퍼링크 기능, 이미지 업로드가 가능합니다.
            필수사항 없을 시 작성 및 수정이 불가능하게 설정하였습니다.
        - 게시물 전체보기 페이지
            게시물마다 좋아요 기능과 좋아요 수, 조회수가 보이게 하였습니다.
            게시물 수정과 삭제가 가능한 메뉴버튼이 있으며 게시물 검색, 분류 
            ( 전체, 내가 쓴 글, 내가 좋아요 한 글 세가지 필터, 카테고리 별( 전체+ it소식, 잡담/일상, 기술, 인턴십/공모전+ 공지) 분류, 최신순, 조회순, 등록 순, 인기순 정렬 기능 )가 가능합니다.
        - 게시물 상세보기 페이지
            게시물 좋아요 기능과 좋아요 수, 조회수가 보이며 게시물 수정과 삭제가 가능한 메뉴버튼이 있습니다.
            각 게시물마다 댓글을 달 수 있으며 댓글 수정, 삭제도 가능합니다.`,
    ],
    stack: [
      "React",
      "tailwind.css",
      "styled-components",
      "TypeScript",
      "Zunstand",
    ],
    images: [
      "/img/projects/InjisPortFolio_1.png",
      "/img/projects/InjisPortFolio_2.png",
    ],
  },
  {
    title: "CoCo",
    date: "2024.04.22 ~ 2024.05.21",
    teamSize: "Team",
    titleDescription: "커뮤니티와 챌린지 요소인 출석체크가 포함된 웹 IDE ",
    git: "https://github.com/Coco-Das/Coco-IDE-FE",

    description: `COCO IDE는 별도 설치없이 브라우저를 통한 개발환경을 제공하는 IDE입니다. 
      반응형 메인페이지로 필요한 것들이 한눈에 보이며 이용자들 서로 응원을 해줄 단체 채팅과 출석 도장을 찍을 수 있는 챌린지 요소등이 포함되어 있습니다.`,
    member: `프론트엔드 3명 + 백엔드 4명`,

    tasks: [
      ` 채팅 : 이용자들 서로 응원할 수 있는 단체 채팅 기능입니다.
        - web Socket을 통해 실시간 채팅 기능을 구현했습니다.
        - 전체 채팅에서 검색이 가능하며, 내 채팅을 삭제할 수 있습니다.
        - 유저의 아이디와 시간으로 채팅을 구분할 수 있습니다.`,
      ` 출석 체크 : 하루에 한번만 가능하게 구현했습니다.`,
      `메인페이지 : 어떤 페이지로든 이동할 수 있는 기본 페이지입니다.
        - 인사말, 출석체크, 수정중인 프로젝트로 이동, 채팅 미리보기 기능들을 반응형으로 볼 수 있습니다.
        - 폴더 목록을 볼 수 있으며 삭제 가능합니다.`,
    ],
    stack: [
      "React",
      "tailwind.css",
      "styled-components",
      "TypeScript",
      "Zustand",
      "Sock.JS ( Web Socket )",
    ],
    images: [
      "/img/projects/InjisPortFolio_1.png",
      "/img/projects/InjisPortFolio_2.png",
    ],
  },
];
