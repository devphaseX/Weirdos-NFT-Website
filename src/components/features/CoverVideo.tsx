import { FC } from 'react';
import style from '../../styles/pages/home/features/coverVideo.module.css';

interface CoverVideoProps {
  src: string;
}

const CoverVideo: FC<CoverVideoProps> = ({ src }) => {
  return (
    <div className={style.coverVideo}>
      <video src={src} typeof="vidoe/mp4" autoPlay muted loop></video>
    </div>
  );
};

export default CoverVideo;
