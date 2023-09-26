import { TApiUrl } from '@t/api';
import { TFormProps } from '@t/react';

type TReturn = Required<Pick<TFormProps, 'action' | 'method'>>;
export const resolvePostProps = (action: TApiUrl): TReturn => {
  return {
    action,
    method: 'post',
  };
};
