import { FC } from 'react';
import { Wip } from '.';
import { useLocation } from 'react-router';

export const Pathname: FC = () => {
  const { pathname } = useLocation();
  return <Wip pathname={pathname} />;
};
