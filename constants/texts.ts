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
    react: Skill;
    next: Skill;
    redux: Skill;
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
      "안녕하세요. \n웹개발자 김예찬입니다 :) \n프론트엔드로 일한 1년 동안, 좋은 동료들과 함께, 사용자들이 사용할 여러 제품을 만들어볼 수 있었습니다. \n사용할 기술을 정확하게 알고 있어야 좋은 제품을 만드는 기초가 된다고 생각하는 개발자입니다. 공식 문서를 읽는 걸 즐기고, 문서를 통해 얻은 지식으로 제품을 만들 때 즐거움을 느낍니다. \n해당 경험과 흥미를 합쳐 유저에게는 좋은 제품을, 팀에게는 좋은 코드를 제공할 수 있는 개발자가 되고 싶습니다.",
    skills: {
      language: {
        title: "언어",
        description: "",
      },
      community: {
        title: "대화",
        description: "",
      },
      react: {
        title: "리액트",
        description: "",
      },
      next: {
        title: "넥스트",
        description: "",
      },
      redux: {
        title: "리덕스(툴킷)",
        description: "",
      },
      query: {
        title: "리액트쿼이",
        description: "",
      },
      hook_form: {
        title: "리액트훅폼",
        description: "",
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
      "Hello. \nI'm Yechan Kim, the web developer :)\nDuring my year as a front-end worker, I was able to create a number of products for users with good colleagues. \nI'm a developer who thinks that knowing exactly what technology to use is the basis for making a good product. I enjoy reading official documents, and I enjoy making products with the knowledge I get from them. \nIn the future, I will be a developer who can combine the experience and interest to provide good products for users and good code for the team.",
    skills: {
      language: {
        title: "언어",
        description: "",
      },
      community: {
        title: "대화",
        description: "",
      },
      react: {
        title: "리액트",
        description: "",
      },
      next: {
        title: "넥스트",
        description: "",
      },
      redux: {
        title: "리덕스(툴킷)",
        description: "",
      },
      query: {
        title: "리액트쿼이",
        description: "",
      },
      hook_form: {
        title: "리액트훅폼",
        description: "",
      },
    },
  },
};
