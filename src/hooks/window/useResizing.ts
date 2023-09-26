import { useDebounce } from '@hooks/window/useDebounce';
import { useRef, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useResizing = () => {
  const [isResizing, setResizing] = useState<boolean | null>(null);
  const prevWidthRef = useRef<number | null>(null);
  const nextWidthRef = useRef<number | null>(null);

  const handleDebounce = useDebounce();

  const update = () => {
    nextWidthRef.current = window.innerWidth;
    setResizing(false);
  };

  const handleSize = () => {
    if (!isResizing) {
      prevWidthRef.current = window.innerWidth;
      setResizing(true);
    }
    handleDebounce(update, 200);
  };

  useEventListener('resize', handleSize);

  return { isResizing, prev: prevWidthRef.current, next: nextWidthRef.current };
};
