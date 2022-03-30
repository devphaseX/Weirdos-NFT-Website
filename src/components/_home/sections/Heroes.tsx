import { FC } from 'react';
import style from '../../../styles/pages/home/sections/heroes.module.css';
import TypewriterContainer from '../../features/Typewriter';
import QuickScroll from '../../QuickScroll';
import CoverVideo from '../../features/CoverVideo';
import circleScrollBgDark from '../../../assets/Rounded-Text-Black.png';
import circleScrollBgLight from '../../../assets/Rounded-Text-White.png';
import useThemeDetection from '../../../hooks/useThemeDetection';

const Heroes: FC = () => {
  const theme = useThemeDetection();
  return (
    <header className={style.heroes}>
      <div className={style.container}>
        <div className={style.self_contain} id={style.main_text_box}>
          <TypewriterContainer />
        </div>
        <div className={style.self_contain}>
          <CoverVideo src="vidoes/Home_Video.mp4" />
        </div>
      </div>
      <div className={style.scroll}>
        <QuickScroll
          srcInfo={{
            href: theme === 'dark' ? circleScrollBgLight : circleScrollBgDark,
            alt: '',
          }}
        />
      </div>
    </header>
  );
};

export default Heroes;
