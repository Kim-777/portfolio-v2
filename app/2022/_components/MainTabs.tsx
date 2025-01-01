'use client';

import { useTheme } from 'contexts/ThemeProvider';
import React from 'react';
import styles from './MainTabs.module.scss';
import classNames from 'classnames/bind';
import { texts } from 'constants/texts';
import { useLanguage } from 'contexts/LanguageProvider';
import { usePathname, useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

const Tabs = ['/', '/skills', '/works'];

const MainTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { selectedLanguage } = useLanguage();
  const { selectedTextColor } = useTheme();

  return (
    <div className={cx({ wrapper: true })}>
      <ul className={cx({ ul: true })}>
        {Tabs.map((tab, index) => (
          <li key={tab + index}>
            <button
              style={{
                color: selectedTextColor,
                borderBottomWidth: pathname === tab ? '2px' : 'none',
                borderBottomColor: pathname === tab ? selectedTextColor : 'none',
                borderBottomStyle: pathname === tab ? 'solid' : 'none',
              }}
              className={cx({ tab: true })}
              onClick={() => {
                router.push(tab);
              }}
            >
              {texts[selectedLanguage][index === 0 ? 'tab1' : index === 1 ? 'tab2' : 'tab3']}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainTabs;
