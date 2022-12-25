import React from "react";
import styles from "./Skill.module.scss";
import classNames from "classnames/bind";
import { Skill, TextKeywords, texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";

const cx = classNames.bind(styles);

type Props = Skill;

const Skill = ({ title, description }: Props) => {
  const [isDescriptionOpen, setIsDescriptionOpen] =
    React.useState<boolean>(false);

  return (
    <div className={cx({ wrapper: true })}>
      <button
        onClick={() => {
          setIsDescriptionOpen((prev) => !prev);
        }}
      >
        {title} →
      </button>
      {isDescriptionOpen && <div>{description}</div>}
    </div>
  );
};

export default React.memo(Skill);
