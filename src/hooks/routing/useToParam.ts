import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const EQUALS_DELIMITER = '='
export type TParamStr = `${string}${typeof EQUALS_DELIMITER}${string}`

export const useToParam = (
  nextParam
: TParamStr) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const next = useMemo(() => {
    const [key, value] = nextParam.split(EQUALS_DELIMITER);
    searchParams.set(key, value);

    return`${pathname}?${searchParams}`
  }, [nextParam, searchParams.toString()])

  return next
};
