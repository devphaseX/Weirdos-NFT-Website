import { FC, useRef, useLayoutEffect } from 'react';
import style from '../../../../styles/pages/home/sections/roadmap.module.css';
import DrawSVG from '../../../features/DrawSVG';
import featuresData from './features-data.json';
import Features from './Features';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const RoadMap: FC = () => {
  const revealRefs = useRef<Array<HTMLLIElement>>([]);

  gsap.registerPlugin(ScrollTrigger);

  function addELementRef(el: HTMLLIElement) {
    if (el && el instanceof HTMLElement && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        { y: '0' },
        {
          y: '-30%',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className={style.roadmap}>
      <h1>Roadmap</h1>
      <div className={style.roadmap__container}>
        <div className={style.svgContainer}>
          <DrawSVG />
        </div>
        <Features features={featuresData} ref={addELementRef} />
      </div>
    </section>
  );
};

export default RoadMap;
