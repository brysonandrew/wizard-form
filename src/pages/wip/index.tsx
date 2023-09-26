import { Wip } from '@components/wip';
import { FC } from 'react';
import { useLocation } from 'react-router';

export const Index: FC = () => {
  const { pathname } = useLocation();
  return <Wip pathname={pathname} />;
};
