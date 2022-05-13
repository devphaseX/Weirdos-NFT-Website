import { FC, MutableRefObject } from 'react';
import { ShowCaseItemData } from './showcaseData';

interface CardProps {
  _className_: string;
  data: ShowCaseItemData;
  passedRef: MutableRefObject<HTMLDivElement | null>;
}

const Card: FC<CardProps> = ({
  _className_,
  data: { name, img, number, price, priceTypeImg },
  passedRef,
}) => {
  const paused = () => {
    if (passedRef.current) {
      passedRef.current.style.animationPlayState = 'paused';
    }
  };

  const play = () => {
    if (passedRef.current) {
      passedRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className={_className_} onMouseOver={paused} onMouseOut={play}>
      <div>
        <img src={img} alt={name} />
      </div>

      <div>
        <div>
          <h3>{name}</h3>
          <p>#{number}</p>
        </div>
        <div className="price">
          <h4>Price</h4>
          <div className="price_tag">
            <img src={priceTypeImg} alt="cyptocoin"></img>
            <p>{+price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
