import React from "react";
import styles from "./Skill.module.scss";
import classNames from "classnames/bind";
import { Skill, TextKeywords, texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";
import { useTheme } from "contexts/ThemeProvider";

const cx = classNames.bind(styles);

type Props = Skill;

const Skill = ({ title, description }: Props) => {
  const [isDescriptionOpen, setIsDescriptionOpen] =
    React.useState<boolean>(false);
  const { selectedTextColor } = useTheme();

  return (
    <div className={cx({ wrapper: true })}>
      <button
        className={cx({ title: true })}
        onClick={() => {
          setIsDescriptionOpen((prev) => !prev);
        }}
        style={{
          color: selectedTextColor,
          borderBottomColor: selectedTextColor,
          borderBottomStyle: "solid",
          borderBottomWidth: isDescriptionOpen ? "1px" : "0px",
        }}
      >
        {title} →
      </button>
      {isDescriptionOpen && (
        <div
          className={cx({ descriptionWrapper: true })}
          style={{ color: selectedTextColor }}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default React.memo(Skill);
