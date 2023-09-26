import { useDomCondition } from '../life-cycles/useDomCondition';

export const useOrigin = () => {
  const origin = useDomCondition(() => window.origin) ?? '';
  return origin;
};
