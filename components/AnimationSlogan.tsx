import { useLanguage } from "contexts/LanguageProvider";
import { useTheme } from "contexts/ThemeProvider";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AnimationSlogan = () => {
  const { selectedLanguage } = useLanguage();
  const { selectedBackground } = useTheme();

  const [text] = useTypewriter({
    words:
      selectedLanguage === "en"
        ? [
            "Hello! I'm Kim ye chan :)",
            "I'm FE Developer who enjoy Coding",
            "You can come anytime",
            "Let's have a cup of coffee ☕️",
          ]
        : [
            "안녕하세요! 김예찬입니다 :)",
            "코딩이 즐거운 프론트엔드 개발자입니다",
            "다양한 주제의 대화는 언제나 환영합니다",
            "커피 한 잔하실까요? ☕️",
          ],
    loop: false,
    delaySpeed: 1000,
  });

  return (
    <div style={{ marginTop: "32px" }}>
      <span className="mr-3">{text}</span>
      <Cursor cursorColor={selectedBackground === "dark" ? "white" : "black"} />
    </div>
  );
};

export default AnimationSlogan;
