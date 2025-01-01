'use client';

import { LanguageProvider } from 'contexts/LanguageProvider';
import { ThemeProvider } from 'contexts/ThemeProvider';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children?: ReactNode;
};

const MainPage = ({ children }: Props) => {
  return (
    <LanguageProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LanguageProvider>
  );
};

export default MainPage;
