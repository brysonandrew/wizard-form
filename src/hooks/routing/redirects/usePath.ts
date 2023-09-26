import { TApiPath, TApiPathname } from '@t/api';
import { TStrEntries } from '@t/data';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export type TPathConfig = {
  pathname: TApiPathname;
  entries?: TStrEntries;
};
export const usePath = ({ pathname, entries = [] }: TPathConfig): TApiPath => {
  const [searchParams] = useSearchParams();
  const apiPath = useMemo<TApiPath>(() => {
    const nextSearchParams = new URLSearchParams();
    entries.forEach((entry) => {
      nextSearchParams.append(...entry);
    });
    let paramStr = nextSearchParams.toString();
    paramStr = encodeURI(paramStr);

    let result: TApiPath = pathname;
    if (paramStr) {
      result = `${pathname}?${paramStr}` as const;
    }
    return result;
  }, [pathname, entries]);

  return apiPath;
};
