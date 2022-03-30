import { FC } from 'react';
import style from '../styles/general/quickScroll.module.css';

interface QuickScrollProps {
  srcInfo: { href: string; alt: string };
}
const QuickScroll: FC<QuickScrollProps> = ({ srcInfo }) => {
  return (
    <div className={style.quickScroll}>
      <span className={style.circle}>&#x2193;</span>
      <img src={srcInfo.href} alt={srcInfo.alt} />
    </div>
  );
};

export default QuickScroll;
