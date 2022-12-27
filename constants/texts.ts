import { EnabledLanguage } from "../contexts/LanguageProvider";

export type Skill = {
  title: string;
  description: string;
};

export type Experience = {
  title: string;
  period: string;
  images?: string[];
  part: string;
  feelings: string;
  skills: string;
  link?: string;
};

export type TextKeywords = {
  authorName: string;
  title: string;
  job: string;
  tab1: string;
  tab2: string;
  tab3: string;
  index: string;
  period: string;
  skill_title: string;
  feelings: string;
  part: string;
  direct: string;
  skills: {
    language: Skill;
    community: Skill;
    javascript: Skill;
    typescript: Skill;
    react: Skill;
    next: Skill;
    query: Skill;
    hook_form: Skill;
  };
  experience: {
    pilyo: Experience;
    jigugong: Experience;
    bankmall: Experience;
    sound_jungle: Experience;
    spvrkd: Experience;
    homegrit: Experience;
  };
};

export const texts: { [country in EnabledLanguage]: TextKeywords } = {
  ko: {
    title: "안녕하세요",
    authorName: "김예찬",
    job: "웹 개발자 (프론트엔드)",
    tab1: "소개",
    tab2: "기술들",
    tab3: "경험",
    index:
      "안녕하세요. \n웹개발자 김예찬입니다 :) \n프론트엔드로 일하고 있는 1년 동안, 좋은 동료들과 함께, 사용자들이 사용할 여러 제품을 만들어볼 수 있었습니다. \n사용할 기술을 정확하게 알고 있어야 좋은 제품을 만드는 기초가 된다고 생각합니다. 공식 문서를 읽는 걸 즐기고, 문서를 통해 얻은 지식으로 제품을 만들 때 즐거움을 느낍니다. \n해당 경험과 흥미를 합쳐 유저에게는 좋은 제품을, 팀에게는 좋은 코드를 제공할 수 있는 개발자가 되고 싶습니다.",
    period: "기간",
    skill_title: "사용된 기술",
    feelings: "경험",
    part: "파트",
    direct: "바로가기",
    skills: {
      language: {
        title: "언어",
        description:
          "어문 계열을 전공했던 경험은 다양한 언어를 습득하는데 도움이 되었습니다. \n특히 영어 독해에 어려움이 없어 공식 문서를 읽고 해당 기술을 이해할 수 있습니다.",
      },
      community: {
        title: "대화",
        description:
          "정확하고 즐거운 커뮤니케이션은 모든 것에 기초가 된다고 생각합니다. \n동료들과 다양한 주제로 소통하는 걸 즐깁니다.",
      },
      javascript: {
        title: "자바스크립트(ES2015 ~)",
        description:
          "FE 생태계의 기초가 되는 언어인 만큼 꾸준한 반복 학습을 통해, 비동기, 클로저, 프로토타입 등, 모던 자바스크립트를 이해하고 정확히 사용합니다.",
      },
      typescript: {
        title: "타입스크립트",
        description:
          "요즘 가장 관심이 가는 기술로써 , 기존의 프로젝트를 타입스크립트로 전환하고,관련된 다양한 책을 읽음으로써 올바른 사용법을 익혀가고 있습니다.",
      },
      react: {
        title: "리액트",
        description:
          "주력으로 사용하는 기술로써, 제공하는 api들을 학습하고, 리액트를 통한 선언적 컴포넌트를 통해 예측 가능한 UI를 그립니다.",
      },
      next: {
        title: "넥스트",
        description:
          "리액트를 편하게 사용하기 위한 프레임워크로, 넥스트가 지원하는 서버사이드렌더링과 파일 기반 라우팅을 비롯한 넥스트의 편의를 이용할 수 있습니다.",
      },

      query: {
        title: "리액트쿼리",
        description:
          "React query를 통해 서버 데이터 를 관리하는 데 능숙하고, queryClient, useQuery, useMutation 등 모든 api 를 자유롭게 사용합니다.",
      },
      hook_form: {
        title: "리액트훅폼",
        description:
          "React Hook Form을 통해 form 데이터를 재렌더링 없이 효율적으로 관리합니다. \n다양한 UI 라이브러리를 react hook form의 Controller와 함께 사용하는데 능숙합니다.",
      },
    },
    experience: {
      pilyo: {
        title: "필요",
        period: "2021/10 ~ 2022/01",
        part: "FE 전부",
        images: ["/images/pilyo1.png"],
        feelings:
          "리액트 네이티브를 사용해서 Ios, Android 앱을 처음부터 개발할 수 있었습니다. \n알람 기능을 위해 파이어베이스를 사용 했고, 앱 내에서의 페이지 이동을 위해 네비게이션을 사용했습니다. \n또한 웹뷰를 사용해 맵을 그리는 작업을 진행했습니다.",
        skills: "리액트 네이티브, 리액트 네비게이션, 파이어베이스, axios, 웹뷰",
      },
      jigugong: {
        title: "지구공",
        period: "2022/01 ~ 2022/04",
        part: "앱 유지보수 및 새로운 기능(미션, 모임) 개발",
        images: ["/images/jigugong1.png"],
        feelings:
          "기존의 앱을 전반적으로 유지보수하고, 모임이라는 새로운 기능를 만들었습니다. \n아래 스택에 있는 화면에 데이터 동기화가 안되는 이슈를 redux를 통해 해결 했고, FlatList과 FastImage를 통해 앱 최적화를 경험할 수 있었습니다.",
        skills: "리액트 네이티브, 리액트 네비게이션, 리덕스, axios",
      },
      bankmall: {
        title: "뱅크몰",
        period: "2022/04 ~ 2022/06",
        part: "새로운 기능 개발(FE, 신용 파트)",
        images: ["/images/bankmall1.png"],
        feelings:
          "Styled-Components를 통해 빠른 퍼블리싱과 antd 컴포넌트들을 커스텀할 수 있었습니다. \n리액트가 제공하는 createContext와 useContext를 통해 프롭스 드롤링을 해결할 수 있었습니다.",
        skills: "styled-components, antd, context",
        link: "https://www.bank-mall.co.kr/",
      },
      sound_jungle: {
        title: "사운드정글",
        period: "2022/07 ~ 2022/09",
        part: "유지보수, 새로운 기능 개발",
        images: ["/images/soundjungle1.png"],
        feelings:
          "Expo에 웹뷰를 띄워 웹을 앱과 공유하는 프로젝트였습니다. \nTypescript, React-query를 통해 기존에 서버 데이터와 일치 하지 않던, 클라이언트의 데이터를 동기화 할 수 있었습니다.",
        skills: "typescript, react-query, react-hook-form",
      },
      spvrkd: {
        title: "스파크드",
        period: "2022/09 ~ 2022/10",
        part: "웹(사용자) 개발",
        images: [],
        feelings:
          "tailwind-css를 사용하여 빠르게 퍼블리싱을 개발할 수 있었습니다. stripe를 연동해 해외 결제 기능을 개발 할 수 있었습니다. \n(런칭 준비 중)",
        skills: "tailwind-css, typescript, react-query, react-hook-form",
        link: "https://spvrkd.com/",
      },
      homegrit: {
        title: "홈그릿 어드민, 파트너스",
        period: "2022/10 ~ 2022/12",
        part: "어드민, 파트너스 cms 개발",
        images: [],
        feelings:
          "Antd를 통해 빠르게 화면을 구성할 수 있었습니다. \ncustom hook을 통해, 공통으로 사용되는 로직을 분리하고 관리할 수 있었습니다. \n스위트래커(배송 추적), 아임포트(결제), 다음 포스트(주소) 등의 서드파티를 통해 다양한 기능을 개발해 볼 수 있었습니다.\n(런칭 준비 중)",
        skills: "cra, redux/toolkit, dayjs, antd, import, react-router-dom",
      },
    },
  },
  en: {
    title: "Hi!",
    authorName: "kimyechan",
    job: "Web developer (FE)",
    tab1: "Index",
    tab2: "Skills",
    tab3: "Works",
    index:
      "Hello. \nI'm Yechan Kim, the web developer :)\nDuring my year as a front-end developer, I was able to create a number of products for users with good colleagues. \nI'm a developer who thinks that knowing exactly what technology to use is the basis for making a good product. I enjoy reading official documents, and I enjoy making products with the knowledge I get from them. \nIn the future, I will be a developer who can combine the experience and interest to provide good products for users and good code for the team.",
    period: "Period",
    skill_title: "Used Skills",
    feelings: "Experience",
    part: "Part",
    direct: "direct",
    skills: {
      language: {
        title: "language",
        description:
          "The experience of majoring in languages helped me acquire various languages. \nIn particular, there is no difficulty in reading English, so I can read official documents and understand the technology.",
      },
      community: {
        title: "Community",
        description:
          "I think accurate and enjoyable communication is the basis of everything. \nI enjoy communicating with my colleagues on various topics.",
      },
      javascript: {
        title: "Javascript(Modern)",
        description:
          "As it is the language that is the basis of the FE ecosystem, I understand and use modern JavaScript, such as asynchronous(Promise), closure, and prototype, through constant repetitive learning.",
      },
      typescript: {
        title: "Typescript",
        description:
          "As a skill that I am most interested in these days, I am learning how to use it properly by migrating existing projects with TypeScript and reading various related books.",
      },
      react: {
        title: "React",
        description:
          "As a Skill used as a main force, I learn the api provided and draw predictable UI through declarative components with React",
      },
      next: {
        title: "Nextjs",
        description:
          "It is a framework for easy use of React, and you can take advantage of Next's convenience, including server side rendering and file-based routing supported by Next.",
      },

      query: {
        title: "React Query",
        description:
          "I am good at managing server data through React Query, and free to use all apis, including queryClient, useQuery, useMutation and etc ",
      },
      hook_form: {
        title: "React Hook Form",
        description:
          "I effectively manage form-data without re-rendering by using React Hook Form. I am good at using various UI libraries with the Controller provided by Hook Form",
      },
    },
    experience: {
      pilyo: {
        title: "PILYO, App",
        period: "2021/10 ~ 2022/01",
        part: "FE All Feature",
        images: ["/images/pilyo1.png"],
        feelings:
          "I was able to develop Ios and Android apps from scratch using React Native. \nI used Firebase for alarms and navigation to move pages within the app. \nAlso, I drew a map using the web view",
        skills: "react-native, react-navigation, firebase, axios, webview",
      },
      jigugong: {
        title: "JIGUGONG, App",
        period: "2022/01 ~ 2022/04",
        part: "Mission, Meeting Feature Develop",
        images: ["/images/jigugong1.png"],
        feelings:
          "I maintained existing apps across the board and created a new feature called Meeting. Redux solved the problem of data synchronization on the screen in the stack below, and I was able to experience app optimization through FlatList and FastImage.",
        skills: "react-native, react-navigation, redux, axios",
      },
      bankmall: {
        title: "BANKMALL, Web",
        period: "2022/04 ~ 2022/06",
        part: "Credit Feature",
        images: ["/images/bankmall1.png"],
        feelings:
          "Styled-Components allowed me to build fast publishing and to customize Antd Components. Props Drilling issue could be solved through createContext and useContext provided by React.",
        skills: "styled-components, antd, context",
        link: "https://www.bank-mall.co.kr/",
      },
      sound_jungle: {
        title: "SOUNDJUNGLE, Hybrid",
        period: "2022/07 ~ 2022/09",
        part: "Overall Maintenance",
        images: ["/images/soundjungle1.png"],
        feelings:
          "It was a project to share the web with the app by displaying a web view on Expo. \nThe client's data could be synchronized using typescript, reaction-query, which did not match the existing server data.",
        skills: "typescript, react-query, react-hook-form",
      },
      spvrkd: {
        title: "SPVRKD, FO",
        period: "2022/09 ~ 2022/10",
        part: "All Web feature",
        images: [],
        feelings:
          "I was able to develop publishing quickly using tailwind-css. \nI was able to develop an overseas payment function by linking Stripe. (Preparing for launch)",
        skills: "tailwind-css, typescript, react-query, react-hook-form",
        link: "https://spvrkd.com/",
      },
      homegrit: {
        title: "HOMEGRIT, admin, partners",
        period: "2022/10 ~ 2022/12",
        part: "CMS (admin, partners web)",
        images: [],
        feelings:
          "Antd enabled me to quickly configure your screen. Through custom hooks, I was able to separate and manage common logic and to develop various functions through third parties such as Sweet Tracker (delivery tracking), IMPORT (payment), and Daum Post (address).\n(Preparing for Launch)",
        skills: "cra, redux/toolkit, dayjs, antd, import, react-router-dom",
      },
    },
  },
};
