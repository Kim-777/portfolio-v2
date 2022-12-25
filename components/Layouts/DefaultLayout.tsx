import React, { ReactNode } from "react";
import styles from "styles/Home.module.scss";
import classNames from "classnames/bind";
import { useLanguage } from "contexts/LanguageProvider";
import { useTheme } from "contexts/ThemeProvider";
import LightTopMenu from "components/LightTopUtils/LightTopMenu";
import { texts } from "constants/texts";
import MainInfoSection from "components/MainInfoSection";

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
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;
