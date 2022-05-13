import { VFC, forwardRef } from 'react';
import { FeatureData } from '../../../../types/types';
import style from '../../../../styles/pages/home/features/aboutFeatures.module.css';

const Features = forwardRef<HTMLLIElement, { features: Array<FeatureData> }>(
  ({ features }, ref) => (
    <div className={style.features}>
      <ul className={style.features__list}>
        <Feature empty item={{ info: '', title: '' }} ref={ref} />
        {features.map((item, i) => {
          return <Feature item={item} key={`${item.title}${i}`} ref={ref} />;
        })}
      </ul>
    </div>
  )
);

const Feature = forwardRef<
  HTMLLIElement,
  { item: FeatureData; empty?: boolean }
>(({ empty, item: { title, info } }, ref) => {
  if (empty) {
    return <li className={style['feature-item']}>&nbsp;</li>;
  }
  return (
    <li className={style['feature-item']} ref={ref}>
      <div className={style['feature-item__content']}>
        <p>
          <span>{title}</span>
          <span>{info}</span>
        </p>
      </div>
    </li>
  );
});

export default Features;
