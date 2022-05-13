import { useState, useEffect, MutableRefObject } from 'react';
import { ObjectDimension } from './../types/types';

const useElementDimension = <T extends HTMLElement | null>(
  ref: MutableRefObject<T>
) => {
  const [dimension, setDimension] = useState<ObjectDimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimension({ width, height });
    }
  }, [ref.current]);

  return dimension;
};

export default useElementDimension;
