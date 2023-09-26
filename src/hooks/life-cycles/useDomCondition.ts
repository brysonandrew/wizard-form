import { useEffect, useState } from 'react';

export const useDomCondition = <T>(handler: () => T) => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    const result = handler();
    setValue(result);
  }, []);

  return value;
};
