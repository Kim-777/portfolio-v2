import React from "react";
import { EnabledLanguage, useLanguage } from "../../contexts/LanguageProvider";
import classNames from "classnames/bind";
import styles from "./LanguageBox.module.scss";
import { useTheme } from "../../contexts/ThemeProvider";

const cx = classNames.bind(styles);

const LanguageBox = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const { selectedBackground, selectedTextColor } = useTheme();

  const helper = React.useCallback(
    (lang: string): lang is EnabledLanguage => {
      return lang !== selectedLanguage;
    },
    [selectedLanguage]
  );

  const Languages = React.useMemo<EnabledLanguage[]>(
    () => ["ko", "en"].filter<EnabledLanguage>(helper),
    [selectedLanguage]
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cx({ [selectedBackground]: true })}
        style={{ color: selectedTextColor }}
      >
        {selectedLanguage}
      </button>
      {isOpen && (
        <div className={cx({ liWrapper: true })}>
          {Languages.map((item) => (
            <button
              onClick={() => {
                setSelectedLanguage(item);
                setIsOpen(false);
              }}
              className={cx({ liBtn: true })}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageBox;
