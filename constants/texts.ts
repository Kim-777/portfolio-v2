import { EnabledLanguage } from "../contexts/LanguageProvider";

export type Skill = {
  title: string;
  description: string;
};

export type TextKeywords = {
  authorName: string;
  title: string;
  job: string;
  tab1: string;
  tab2: string;
  tab3: string;
  index: string;
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
      "안녕하세요. \n웹개발자 김예찬입니다 :) \n프론트엔드로 일하고 있는 1년 동안, 좋은 동료들과 함께, 사용자들이 사용할 여러 제품을 만들어볼 수 있었습니다. \n사용할 기술을 정확하게 알고 있어야 좋은 제품을 만드는 기초가 된다고 생각하는 개발자입니다. 공식 문서를 읽는 걸 즐기고, 문서를 통해 얻은 지식으로 제품을 만들 때 즐거움을 느낍니다. \n해당 경험과 흥미를 합쳐 유저에게는 좋은 제품을, 팀에게는 좋은 코드를 제공할 수 있는 개발자가 되고 싶습니다.",
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
        title: "자바스크립트(2015이후)",
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
  },
};
