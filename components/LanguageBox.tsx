import React from "react";
import { EnabledLanguage, useLanguage } from "../contexts/LanguageProvider";
import classNames from "classnames/bind";
import styles from "./LanguageBox.module.scss";

const cx = classNames.bind(styles);

const LanguageBox = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

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
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cx({ btn: true })}
      >
        {selectedLanguage}
      </button>
      {isOpen && (
        <div>
          {Languages.map((item) => (
            <button
              onClick={() => {
                setSelectedLanguage(item);
                setIsOpen(false);
              }}
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
