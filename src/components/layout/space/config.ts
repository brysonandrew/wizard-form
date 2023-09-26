import { TClassValueProps } from '@t/react/attributes';
import { HTMLProps } from 'react';

export type TSpaceProps = Omit<HTMLProps<HTMLElement>, 'className'> &
  TClassValueProps & {
    element?: keyof JSX.IntrinsicElements;
  };
