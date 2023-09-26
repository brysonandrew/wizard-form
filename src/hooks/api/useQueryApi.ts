import { useQuery } from '@tanstack/react-query';
import { TFetchReturn, useFetch } from '@hooks/api/useFetch';
import { resolveApiCorsBase } from '@utils/api/resolveApiCorsBase';
import { TPath } from '@t/data';

/* 
 When querying the API 
  - in dev we use resolveApiCorsBase to concatenate cors-proxy and process.env.VITE_API_ROOT
  - in prod we use a relative path
*/

const OPTIONS: RequestInit = {};

export const useQueryApi = <T extends object>(search?: TPath | null) => {
  const base = resolveApiCorsBase();
  const handleFetch = useFetch<T>({ search, base, options: OPTIONS });
  const query = useQuery<Promise<TFetchReturn<T>>, any, T>([search], handleFetch);
  return query;
};
 