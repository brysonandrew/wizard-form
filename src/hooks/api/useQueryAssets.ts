import { useQuery as _useQuery } from '@tanstack/react-query';
import { TFetchConfig, TFetchReturn, useFetch } from '@hooks/api/useFetch';
import { useOrigin } from '@hooks/routing/useOrigin';
import { TPath } from '@t/data';

/* 
 When querying /assets/** we always use origin as base
*/
export const useQueryAssets = <T extends object>(search: TPath) => {
  const origin = useOrigin();
  const config: TFetchConfig = { search, base: origin };
  const keys = Object.values(config);
  const handleFetch = useFetch<T>(config);
  const query = _useQuery<Promise<TFetchReturn<T>>, any, T>(keys, handleFetch);

  if (!origin) return null;

  return query;
};
