import React, { ReactNode } from "react";
import styles from "styles/Home.module.scss";
import classNames from "classnames/bind";
import { EnabledLanguage, useLanguage } from "contexts/LanguageProvider";
import { Backgrounds, useTheme } from "contexts/ThemeProvider";
import LightTopMenu from "components/LightTopUtils/LightTopMenu";
import MainInfoSection from "components/MainInfoSection";
import MainTabs from "components/MainTabs";
import Footer from "./Footer";
import { BACKGROUND_KEY, LANGUAGE_KEY } from "constants/key";

const cx = classNames.bind(styles);

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { selectedBackground, setSelectedBackground } = useTheme();
  const { setSelectedLanguage } = useLanguage();

  React.useEffect(() => {
    const background = localStorage.getItem(BACKGROUND_KEY);
    const lan = localStorage.getItem(LANGUAGE_KEY);
    if (background) {
      setSelectedBackground(background as Backgrounds);
    }

    if (lan) {
      setSelectedLanguage(lan as EnabledLanguage);
    }

    setLoading(false);
  }, []);

  if (loading) return null;

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
