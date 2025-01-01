'use client';

import React from 'react';
import styles from './Experience.module.scss';
import classNames from 'classnames/bind';
import { useTheme } from 'contexts/ThemeProvider';
import type { TextKeywords, Experience as ExperienceType } from 'constants/texts';
import { texts } from 'constants/texts';
import { useLanguage } from 'contexts/LanguageProvider';
import Image from 'next/image';

const cx = classNames.bind(styles);

type EnabledExperiences = keyof TextKeywords['experience'];

type Props = ExperienceType & {
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
          borderBottomStyle: 'solid',
          borderBottomWidth: isSelected ? '1px' : '0px',
        }}
      >
        {title} →
      </button>
      {isSelected && (
        <ul className={cx({ descriptionWrapper: true })} style={{ color: selectedTextColor }}>
          <li>
            - {texts[selectedLanguage].period} : {period}
          </li>
          <li>
            - {texts[selectedLanguage].skill_title} : {skills}
          </li>
          <li>
            - {texts[selectedLanguage].part} : {part}
          </li>
          {Boolean(images) && images!.length >= 1 && (
            <li className={cx({ imgWrapper: true, img: true })}>
              {images?.map((img) => (
                <Image key={img} fill alt='project img' src={img} style={{ objectFit: 'cover' }} />
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
