import { LanguageProvider } from 'contexts/LanguageProvider';
import { ThemeProvider } from 'contexts/ThemeProvider';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <LanguageProvider>
        <ThemeProvider>
          <body>{children}</body>
        </ThemeProvider>
      </LanguageProvider>
    </html>
  );
};

export default layout;
