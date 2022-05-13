import { useState } from 'react';

const useForceUpdate = () => {
  const [, forceUpdate] = useState(0);
  return () => forceUpdate(Math.random());
};

export default useForceUpdate;
