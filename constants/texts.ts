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
          "요즘 가장 관심이 가는 기술입니다. 기존의 프로젝트를 타입스크립트로 전환하고,관련된 다양한 책을 읽음으로써 올바른 사용법을 익혀가고 있습니다.",
      },
      react: {
        title: "리액트",
        description:
          "주력으로 사용하는 기술입니다. 제공하는 API들을 자유롭게 다룰 수 있습니다. 리액트를 통한 선언적 컴포넌트를 통해 예측 가능한 UI를 그립니다.",
      },
      next: {
        title: "넥스트",
        description:
          "리액트를 편하게 사용하기 위한 프레임워크로, 서버사이드렌더링과 파일 기반 라우팅을 비롯한 넥스트가 제공하는 다양한 편의 기능을 능숙하게 다룹니다.",
      },

      query: {
        title: "리액트쿼리",
        description:
          "React query를 통해 서버 데이터 를 관리하는 데 능숙하고, queryClient, useQuery, useMutation 등, 제공되는  API를 자유롭게 사용합니다.",
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
          "리액트 네이티브를 사용해서 Ios, Android 앱을 처음부터 개발하였습니다. \n알람 기능을 위해 파이어베이스를 사용하는 최상단 프로바이더를 만들어 모든 컴포넌트에서 useContext를 사용하여 사용할 수 있게하였습니다. 또한 앱 내에서의 페이지 이동을 위해 리액트 네비게이션을 사용하여 스택 페이지, 탭 페이지를 작업하고, 로그인이 완료된 유저와, 로그인 이전의 유저의 스텍 또한 나눌 수 있었습니다. 지도를 만드는 작업 처음엔 라이브러리를 사용하려고 했으나, 개발이 오래 전부터 이루어지고 있지 않아서, 웹뷰를 사용해 맵을 화면에 그릴 수 있었습니다.",
        skills: "리액트 네이티브, 리액트 네비게이션, 파이어베이스, axios, 웹뷰",
      },
      jigugong: {
        title: "지구공",
        period: "2022/01 ~ 2022/04",
        part: "앱 유지보수 및 새로운 기능(미션, 모임) 개발",
        images: ["/images/jigugong1.png"],
        feelings:
          "기존의 앱을 전반적으로 유지보수하고, 모임과 미션이라는 새로운 기능를 만들었습니다. 작업 도중에 화면 아래 스택에 있는 화면들에는 데이터 동기화가 안되는 이슈가 있었습니다. 네비게이션에 데이터 업데이트 후, 콜백 함수로 해결하려 하였지만, 네비게이션 params로 함수를 넘길 경우 경고가 발생했습니다. redux를 통해 데이터를 전역으로 관리하여 해결 할 수 있었습니다. 또한 많은 데이터를 화면에 렌더링 시 느려지는 이슈를 FlatList과 FastImage를 통해 최적화할 수 있었습니다.",
        skills: "리액트 네이티브, 리액트 네비게이션, 리덕스, axios",
      },
      bankmall: {
        title: "뱅크몰",
        period: "2022/04 ~ 2022/06",
        part: "새로운 기능 개발(FE, 신용 파트)",
        images: ["/images/bankmall1.png"],
        feelings:
          "작업 기간이 길지 않았던 프로젝트여서 빠르게 화면 구조를 잡는데 Styled-Components와 Antd 컴포넌트를 사용하여 빠르게 퍼블리싱과 컴포넌트 작업을 진행하였습니다. 컴포넌트를 세세하게 나누어 컴포넌트의 뎁스가 깊어지게 되었는데, 이로 인해, 중간 컴포넌트가 사용하지 않는 props임에도 불과하고 많은 props를 가지게 되어, 코드가 길어지고 컴포넌트를 파악하는 데 어려움이 있었습니다. 해당 이슈를, 리액트가 제공하는 createContext와 useContext를 통해 해당 색션에 사용되고 있던 모든 컴포넌트가 하나의 스토어를 구독해 필요한 데이터를 바로 내려받고 업데이트 하고, 코드의 간결성도 가져갈 수 있었습니다.",
        skills: "styled-components, antd, context",
        link: "https://www.bank-mall.co.kr/",
      },
      sound_jungle: {
        title: "사운드정글",
        period: "2022/07 ~ 2022/09",
        part: "유지보수, 새로운 기능 개발",
        images: ["/images/soundjungle1.png"],
        feelings:
          "Typesscript와 React query를 처음 써볼 수 있는 프로젝트였습니다. 비디오, 기사, 유저 목록 등 리스트 페이지들을 작업할 때 react-query의 useInfiniteQuery를 사용하여 손쉽게 작업할 수 있었습니다. 리액트 쿼리의 리패칭 기능도 유용하게 사용할 수 있었는데, 특정 데이트의 업데이트가 있고 난 후, 데이터 동기화를 항상 고민하거나, 고민을 상쇄하기 위해 페이지에 진입 시 다시 데이터를 받아오곤 했는데, 리액트쿼리의 쿼리키로 꼭 변화가 필요한 페이지만 데이터를 다시 패칭해 올 수 있었습니다.",
        skills: "typescript, react-query, react-hook-form",
      },
      spvrkd: {
        title: "스파크드",
        period: "2022/09 ~ 2022/10",
        part: "웹(사용자) 개발",
        images: [],
        feelings:
          "항상 프로젝트 설계를 진행할 때 고민이었던 쟁점 중 하나가 스타일링에 따른 네이밍이였습니다. 이를 해결하기 위해 서칭을 하던 중 tailwind-css를 알게 되었고, 아토믹하게 나누어진 className을 통해 이름짓기에 따른 고통을 한껏 덜어낼 수 있었습니다. tailwind-css와 더불어 프로젝트에서 가장 유용하게 사용했던 라이브러리는 React Hook Form 이였습니다. 회원가입 진행 시, 작성해야 하는 정보가 많아 모두 state로 들고 있으면 해당 페이지에 렌더링이 빈번히 이루어졌습니다. 해당 이슈를 react hook form이 지원하는 register와 Conroller를 통해 form 내부에서 데이터 변경을 하고, submit 시점에만 데이터 검증을 할 수 있었습니다. \n(런칭 준비 중)",
        skills: "tailwind-css, typescript, react-query, react-hook-form",
        link: "https://spvrkd.com/",
      },
      homegrit: {
        title: "홈그릿 어드민, 파트너스",
        period: "2022/10 ~ 2022/12",
        part: "어드민, 파트너스 cms 개발",
        images: [],
        feelings:
          "CMS, PARTNERS(BO)를 담당하게 했던 프로젝트로, 디자인적인 요소보다 빠른 개발이 중요한 프로젝트 였습니다. Antd를 사용하여, 직접 구현하고자 하면 시간이 오래 걸릴 수 있는 트리구조의 폴더와, 메뉴 등 다양한 컴포넌트를 빠른 시간에 만들 수 있었습니다. 페이지의 많은 부분들이 필터와 테이블로 이루어져 있어 공통적인 로직들이 많았습니다. 해당 부분들을 전부  custom hook으로 제작해 코드의 통일성과 가독성을 가져갈 수 있었습니다. 또한 해당 프로젝트에서는 가장 많이 외부 API를 사용해 볼 수 있었는데, 스위트래커(배송 추적), 아임포트(결제), 다음 포스트(주소) 등의 서드파티를 통해 다양한 기능을 개발해 볼 수 있었습니다.\n(런칭 준비 중)",
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
      "Hello. \nI'm Yechan Kim, the web developer :)\nFor a year as a front-end worker, I was able to create a number of products for users with good colleagues. \nI'm a developer who thinks that knowing exactly what technology to use is the basis for making a good product. I enjoy reading official documents, and I enjoy making products with the knowledge I get from them. \nIn the future, I will be a developer who can combine the experience and interest to provide good products for users and good code for the team.",
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
          "I developed Ios and Android apps from scratch using React Native. \nFor alarm functionality, I've created a top-level provider that uses the Firebase to enable useContext on all components. In addition, I was able to use React Navigation to work on stack pages, tab pages, and share the user's stack with the user who completed the login, and the user's stock before the login. I tried to use a library at first, but it wasn't developed for a long time, so I was able to draw a map on the screen using webview",
        skills: "react-native, react-navigation, firebase, axios, webview",
      },
      jigugong: {
        title: "JIGUGONG, App",
        period: "2022/01 ~ 2022/04",
        part: "Mission, Meeting Feature Develop",
        images: ["/images/jigugong1.png"],
        feelings:
          "I maintained the existing apps overall, and created new functions such as meetings and missions. In the middle of the work, the screens in the stack below the screen had an issue of data synchronization. After updating data to the navigation, an attempt was made to resolve it with the callback function, but a warning was issued when the function was passed to the navigation parameters. Redux allowed data to be managed globally and resolved. In addition, FlatList and FastImage have been able to optimize issues that slow down when rendering a lot of data on the screen.",
        skills: "react-native, react-navigation, redux, axios",
      },
      bankmall: {
        title: "BANKMALL, Web",
        period: "2022/04 ~ 2022/06",
        part: "Credit Feature",
        images: ["/images/bankmall1.png"],
        feelings:
          "It was a project that didn't take a long time to work on, so I quickly worked on publishing and components using Styled-Components and Antd components. The components were divided into smaller components, which led to a deeper depth of components, which resulted in a longer code and more difficulty in determining the components, even though the intermediate components were not in use. Through the createContext and useContext provided by React, all the components used for the session subscribed to one store to download and update the required data immediately, and take the simplicity of the code.",
        skills: "styled-components, antd, context",
        link: "https://www.bank-mall.co.kr/",
      },
      sound_jungle: {
        title: "SOUNDJUNGLE, Hybrid",
        period: "2022/07 ~ 2022/09",
        part: "Overall Maintenance",
        images: ["/images/soundjungle1.png"],
        feelings:
          "It was the first project to write Typescript and React query. When working on list pages such as videos, articles, and user lists, I was able to use react-query's useInfiniteQuery to work with ease. Re-patching of ReactQuery was also useful, and after certain data updates, I would always worry about synchronizing data or re-patching data when I entered the page to offset my concerns, but only pages that needed to be changed with the ReactQuery's query key could be re-patched.",
        skills: "typescript, react-query, react-hook-form",
      },
      spvrkd: {
        title: "SPVRKD, FO",
        period: "2022/09 ~ 2022/10",
        part: "All Web feature",
        images: [],
        feelings:
          "One of the issues that I always worried about when designing projects was the naming according to styling. To solve this problem, I learned tailwind-css while searching, and I was able to relieve the pain of naming it through an atomically divided className. Along with tailwind-css, the most useful library in the project was the React Hook Form. When signing up for membership, there was a lot of information to fill out, so if you hold it in state, rendering was done frequently on the page. Data changes were made within the form through registers and conrollers supported by react hook form, and data verification was only possible at the time of submission. \nI was able to develop an overseas payment function by linking Stripe. (Preparing for launch)",
        skills: "tailwind-css, typescript, react-query, react-hook-form",
        link: "https://spvrkd.com/",
      },
      homegrit: {
        title: "HOMEGRIT, admin, partners",
        period: "2022/10 ~ 2022/12",
        part: "CMS (admin, partners web)",
        images: [],
        feelings:
          "As I was in charge of CMS and PARTNERS (BO), it was a project that was relatively important to develop faster than the importance of design than FO used by users. Using Antd, we were able to quickly create various components such as tree-structured folders and menus that could take a long time to implement. Many parts of the page were made up of filters and tables, so there were many common logics. I make custom hooks for All of these parts, so I could take the uniformity and readability of the code. In addition, external APIs were used the most in the project, and various functions were developed through third parties such as Sweet Tracker (delivery tracking), IMPORT (payment), and Daum Post (address) \n(preparing for launch)",
        skills: "cra, redux/toolkit, dayjs, antd, import, react-router-dom",
      },
    },
  },
};
