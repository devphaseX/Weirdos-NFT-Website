import { FC } from 'react';
import style from '../../../styles/pages/home/sections/showcase.module.css';
import CardRow from './Showcase/CardRow';
import data from './Showcase/showcaseData';

const ShowCase: FC = () => (
  <section className={style.showcase}>
    {data.map((rowData, i) => (
      <CardRow
        _className_={style.cardrow}
        _childClassName_={style.card}
        key={i}
        directionRule={i % 2 === 0 ? undefined : style.cardrow_move_reverse}
        rowData={rowData}
        animationSecPerItem={3}
      />
    ))}
  </section>
);

export default ShowCase;
