import { useDebounce } from '@hooks/window/useDebounce';
import { useIsomorphicLayoutEffect } from '@hooks/life-cycles/useIsomorphicLayoutEffect';
import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useViewport = () => {
  const [isSmall, setSmall] = useState<boolean | null>(null);
  const handleDebounce = useDebounce();
  const update = () => setSmall(document.documentElement.clientWidth < 900);
  const handleSize = () => {
    handleDebounce(update, 200);
  };

  useEffect(() => {
    update();
  }, []);

  useEventListener('resize', handleSize);
  useIsomorphicLayoutEffect(handleSize, []);

  return isSmall;
};
