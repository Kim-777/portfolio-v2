import { useTheme } from "contexts/ThemeProvider";
import { useRouter } from "next/router";
import React from "react";
import styles from "./MainTabs.module.scss";
import classNames from "classnames/bind";
import { texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";

const cx = classNames.bind(styles);

const Tabs = ["/", "/skills", "/works"];

const MainTabs = () => {
  const router = useRouter();
  const { selectedLanguage } = useLanguage();
  const { selectedBackground, selectedTextColor } = useTheme();
  console.log("router ::: ", router.asPath);

  return (
    <div className={cx({ wrapper: true })}>
      <ul className={cx({ ul: true })}>
        {Tabs.map((tab, index) => (
          <li key={tab + index}>
            <button
              style={{
                color: selectedTextColor,
                borderBottomWidth: router.asPath === tab ? "2px" : "none",
                borderBottomColor:
                  router.asPath === tab ? selectedTextColor : "none",
                borderBottomStyle: router.asPath === tab ? "solid" : "none",
              }}
              className={cx({ tab: true })}
              onClick={() => {
                router.push(tab);
              }}
            >
              {
                texts[selectedLanguage][
                  index == 0 ? "tab1" : index === 1 ? "tab2" : "tab3"
                ]
              }
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainTabs;
