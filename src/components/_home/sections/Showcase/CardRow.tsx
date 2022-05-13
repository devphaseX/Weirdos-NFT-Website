import { FC, useLayoutEffect, useRef } from 'react';
import { createValidStyleClassValue } from '../../../../utils';
import Card from './Card';
import { ShowCaseDataRow } from './showcaseData';

interface CardRowProps {
  _className_: string;
  _childClassName_: string;
  _id_?: string;
  directionRule?: string;
  rowData: ShowCaseDataRow;
  animationSecPerItem: number;
}

function computeTotalAnimationDuration(perItemD: number, totalItem: number) {
  return perItemD * totalItem + 's';
}

const CardRow: FC<CardRowProps> = ({
  _className_,
  _childClassName_,
  _id_,
  directionRule,
  rowData,
  animationSecPerItem,
}) => {
  const rowDivRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={createValidStyleClassValue([_className_, directionRule])}
      id={_id_}
      style={{
        animationDuration: computeTotalAnimationDuration(
          animationSecPerItem,
          rowData.length
        ),
      }}
      ref={rowDivRef}
    >
      {rowData.map((data) => (
        <Card
          _className_={_childClassName_}
          data={data}
          key={data.name + data.number}
          passedRef={rowDivRef}
        />
      ))}
    </div>
  );
};

export default CardRow;
