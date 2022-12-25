import React, { ReactNode } from "react";
import styles from "styles/Home.module.scss";
import classNames from "classnames/bind";
import { useLanguage } from "contexts/LanguageProvider";
import { useTheme } from "contexts/ThemeProvider";
import LightTopMenu from "components/LightTopUtils/LightTopMenu";
import MainInfoSection from "components/MainInfoSection";
import MainTabs from "components/MainTabs";
import Footer from "./Footer";

const cx = classNames.bind(styles);

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const { selectedLanguage } = useLanguage();
  const { selectedTextColor, selectedBackground } = useTheme();

  return (
    <main
      className={cx({
        main: true,
        [selectedBackground]: true,
      })}
    >
      <div className={cx({ wrapper: true })}>
        <LightTopMenu />
        <MainInfoSection />
        <MainTabs />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default DefaultLayout;
