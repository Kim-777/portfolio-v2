import React, { createContext, ReactNode, useContext } from "react";

export type EnabledLanguage = "ko" | "en";

type ContextProps = {
  selectedLanguage: EnabledLanguage;
  setSelectedLanguage: (lang: EnabledLanguage) => void;
};

export const LanguageCotext = createContext<ContextProps>({
  selectedLanguage: "ko",
  setSelectedLanguage(lang) {},
});

export const useLanguage = () => {
  return useContext(LanguageCotext);
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<EnabledLanguage>("ko");

  return (
    <LanguageCotext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageCotext.Provider>
  );
};
