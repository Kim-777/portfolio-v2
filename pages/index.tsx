import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import { texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";

const cx = classNames.bind(styles);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { selectedLanguage } = useLanguage();
  return (
    <>
      <Head>
        <title>kimyechan</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ whiteSpace: "pre-wrap" }}>
        <p className={cx({ texts: true })}>{texts[selectedLanguage].index}</p>
      </div>
    </>
  );
}
