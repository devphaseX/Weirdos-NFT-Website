import { FC } from 'react';
import style from '../../../styles/pages/home/sections/roadmap.module.css';
import DrawSVG from '../../features/DrawSVG';

const RoadMap: FC = () => (
  <section className={style.roadmap}>
    <h1>Roadmap</h1>
    <div className={style.roadmap__container}>
      <div className={style.svgContainer}>
        <DrawSVG />
      </div>
    </div>
  </section>
);

export default RoadMap;
