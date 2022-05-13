import { useMedia } from 'react-use';

const useThemeDetection = function () {
  return useMedia('(prefers-color-scheme: dark)', false) ? 'dark' : 'light';
};

export default useThemeDetection;
