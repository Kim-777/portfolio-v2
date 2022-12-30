import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import { texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";
import { useTheme } from "contexts/ThemeProvider";

const cx = classNames.bind(styles);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { selectedLanguage } = useLanguage();
  const { selectedTextColor } = useTheme();
  return (
    <>
      <Head>
        <title>kimyechan</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="김예찬 포트폴리오" />
        <meta property="og:image" content="./among.jpeg"></meta>
        <link rel="icon" href="/circle-among.png" />
      </Head>
      <div style={{ whiteSpace: "pre-wrap", minHeight: "50vh" }}>
        <p className={cx({ texts: true })} style={{ color: selectedTextColor }}>
          {texts[selectedLanguage].index}
        </p>
      </div>
    </>
  );
}
