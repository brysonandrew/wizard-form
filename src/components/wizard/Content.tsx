import { FC } from 'react';

export type TContentProps = { pathname?: string; componentName?: string };
export const Content: FC<TContentProps> = ({ pathname, componentName }) => {
  if (pathname) {
    return <p>⚠ This page {pathname} is under construction</p>;
  }
  if (componentName) {
    return <p>⚠ This component {componentName} is under construction</p>;
  }
  return <p>⚠ This section is under construction</p>;
};
