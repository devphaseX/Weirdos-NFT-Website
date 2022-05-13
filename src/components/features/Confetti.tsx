import { FC } from 'react';
import Confetti from 'react-confetti';
import { ObjectDimension } from '../../types/types';

interface CustomConfettiProps extends ObjectDimension {}

const CustomConfetti: FC<CustomConfettiProps> = ({ height, width }) => {
  return (
    <Confetti
      numberOfPieces={150}
      gravity={0.05}
      height={height}
      width={width}
    />
  );
};

export default CustomConfetti;
