import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import { useLanguage } from "contexts/LanguageProvider";
import { texts } from "constants/texts";
import { useTheme } from "contexts/ThemeProvider";
import LightTopMenu from "components/LightTopUtils/LightTopMenu";
import MainInfoSection from "components/MainInfoSection";

const cx = classNames.bind(styles);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>kimyechan</title>
        <meta name="description" content="kimyechan portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
