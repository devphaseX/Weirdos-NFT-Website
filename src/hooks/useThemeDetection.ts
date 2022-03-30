import { useEffect, useState } from 'react';
import { ThemeType } from '../types/types';

const inverseTheme: Record<ThemeType, ThemeType> = {
  dark: 'light',
  light: 'dark',
};

const useThemeDetection = function () {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark').matches
      ? 'dark'
      : 'light';
  });

  useEffect(function () {
    function detectThemeType() {
      setTheme(inverseTheme[theme]);
    }

    const themeObserver = window.matchMedia('(prefers-color-scheme: dark)');
    themeObserver.addEventListener('change', detectThemeType);

    return function () {
      themeObserver.removeEventListener('change', detectThemeType);
    };
  }, []);

  return theme;
};

export default useThemeDetection;
