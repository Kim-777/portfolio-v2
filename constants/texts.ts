import { EnabledLanguage } from "../contexts/LanguageProvider";

type textKeywords = {
  authorName: string;
  title: string;
  job: string;
  tab1: string;
  tab2: string;
  tab3: string;
};

export const texts: { [country in EnabledLanguage]: textKeywords } = {
  ko: {
    title: "안녕하세요",
    authorName: "김예찬",
    job: "웹 개발자(프론트엔드)",
    tab1: "소개",
    tab2: "기술",
    tab3: "이력",
  },
  en: {
    title: "Hi!",
    authorName: "kimyechan",
    job: "Web developer(FE)",
    tab1: "index",
    tab2: "skils",
    tab3: "career",
  },
};
