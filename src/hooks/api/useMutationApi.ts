import { QueryFunctionContext, useMutation } from '@tanstack/react-query';
import { TFetchReturn, useFetch } from '@hooks/api/useFetch';
import { TPath } from '@t/data';

export const useMutationApi = <T extends object>(search: TPath) => {
  const handleFetch = useFetch<T>({ search });
  const mutation = useMutation<TFetchReturn<T>, any, any, QueryFunctionContext>(
    [search],
    handleFetch,
    {},
  );
  return mutation;
};
