import { FC, useLayoutEffect, useRef, forwardRef } from 'react';
import style from '../../styles/pages/home/features/drawSVG.module.css';
import Vector from '../../Icons/Vector';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Blinker = forwardRef<HTMLSpanElement>((_, ref) => (
  <span ref={ref} role="presentation"></span>
));

const DrawSVG: FC = () => {
  const svgcContainerRef = useRef<HTMLDivElement>(null);
  const blinkerRef = useRef<HTMLSpanElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let svgContainerElement = svgcContainerRef.current!;
    let svgElement = svgContainerElement.querySelector(
      '.svg-path'
    )! as HTMLElement;
    //@ts-ignore
    const svgFullHeight = svgElement.getTotalLength();
    svgElement.style.strokeDasharray = svgFullHeight;
    svgElement.style.strokeDashoffset = svgFullHeight;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: svgContainerElement,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate(self) {
          const draw = svgFullHeight * self.progress;
          svgElement.style.strokeDashoffset = (svgFullHeight - draw).toString();
        },

        onToggle: (self) => {
          const blinkerElement = blinkerRef.current!;
          blinkerElement.classList.toggle(style.blinker, !self.isActive);
        },
      },
    });
    return () => {
      if (t1) {
        t1.kill();
      }
    };
  }, []);

  return (
    <>
      <Blinker ref={blinkerRef} />
      <div className={style.drawSVGContainer} ref={svgcContainerRef}>
        <Vector />
      </div>
    </>
  );
};

export default DrawSVG;
