import "../styles/globals.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "../contexts/LanguageProvider";
import { ThemeProvider } from "../contexts/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}
