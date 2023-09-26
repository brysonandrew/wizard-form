import { useState } from 'react';
import type { FC } from 'react';
import { Context } from '.';
import { CONTEXT } from './constants';
import { TChildrenElement } from '@t/react';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({ children }) => {
  const [context, setState] = useState(CONTEXT);

  const value = {
    ...context
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
