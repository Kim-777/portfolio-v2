import React from "react";
import styles from "./Experience.module.scss";
import classNames from "classnames/bind";
import { useTheme } from "contexts/ThemeProvider";
import { Experience, TextKeywords, texts } from "constants/texts";
import { useLanguage } from "contexts/LanguageProvider";

const cx = classNames.bind(styles);

type EnabledExperiences = keyof TextKeywords["experience"];

type Props = Experience & {
  selectedProject: EnabledExperiences | null;
  setSelectedProject: (project: EnabledExperiences | null) => void;
};

const Experience = ({
  title,
  period,
  images,
  part,
  feelings,
  skills,
  link,
  selectedProject,
  setSelectedProject,
}: Props) => {
  const { selectedLanguage } = useLanguage();
  const { selectedTextColor } = useTheme();

  const isSelected = selectedProject === title;

  return (
    <div className={cx({ wrapper: true })}>
      <button
        className={cx({ title: true })}
        onClick={() => {
          if (isSelected) {
            setSelectedProject(null);
            return;
          }
          setSelectedProject(title as EnabledExperiences);
        }}
        style={{
          color: selectedTextColor,
          borderBottomColor: selectedTextColor,
          borderBottomStyle: "solid",
          borderBottomWidth: isSelected ? "1px" : "0px",
        }}
      >
        {title} →
      </button>
      {isSelected && (
        <ul
          className={cx({ descriptionWrapper: true })}
          style={{ color: selectedTextColor }}
        >
          <li>
            - {texts[selectedLanguage].period} : {period}
          </li>
          <li>
            - {texts[selectedLanguage].skill_title} : {skills}
          </li>
          <li>
            - {texts[selectedLanguage].part} : {part}
          </li>
          {!!images && images?.length >= 1 && (
            <li className={cx({ imgWrapper: true })}>
              {images?.map((img) => (
                <img
                  key={img}
                  alt="project img"
                  src={img}
                  className={cx({ img: true })}
                />
              ))}
            </li>
          )}

          <li>
            - {texts[selectedLanguage].feelings} : {feelings}
          </li>

          {link && (
            <a href={link}>
              {title} {texts[selectedLanguage].direct}
            </a>
          )}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Experience);
