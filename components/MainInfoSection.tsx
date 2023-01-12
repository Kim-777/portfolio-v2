import React from "react";
import styles from "./MainInfoSection.module.scss";
import classNames from "classnames/bind";
import { useTheme } from "contexts/ThemeProvider";
import { useLanguage } from "contexts/LanguageProvider";
import { texts } from "constants/texts";
import Link from "next/link";
import AnimationSlogan from "./AnimationSlogan";

const cx = classNames.bind(styles);

const MainInfoSection = () => {
  const { selectedLanguage } = useLanguage();
  const { selectedTextColor } = useTheme();
  return (
    <div
      className={cx({ wrapper: true })}
      style={{
        borderTopColor: selectedTextColor,
        borderBottomColor: selectedTextColor,
        color: selectedTextColor,
      }}
    >
      <div className={cx({ defaultInfo: true })}>
        <div style={{ paddingBlock: "8px" }}>
          <h1>{texts[selectedLanguage].authorName}</h1>
          <h3>1993.03.09</h3>
          <h3>{texts[selectedLanguage].job}</h3>
          <h3>iloo3012@naver.com</h3>
        </div>
      </div>

      <ul className={cx({ ul: true })}>
        <li>
          <a
            style={{
              color: selectedTextColor,
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: selectedTextColor,
            }}
            href="https://github.com/Kim-777"
          >
            Github
          </a>
        </li>
        <li>
          <a
            style={{
              color: selectedTextColor,
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: selectedTextColor,
            }}
            href="https://www.linkedin.com/in/%EC%98%88%EC%B0%AC-%EA%B9%80-184535212/"
          >
            Linked In
          </a>
        </li>
        <AnimationSlogan />
      </ul>
    </div>
  );
};

export default MainInfoSection;
