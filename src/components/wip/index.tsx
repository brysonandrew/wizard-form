import { FC } from 'react';
import { Content } from './Content';
import { P2 } from '@components/layout/space/P2';

type TProps = { pathname?: string; componentName?: string };
export const Wip: FC<TProps> = (props) => {
  return (
    <div>
      <Content {...props} />
      <P2 />
      <hr />
      <P2 />
    </div>
  );
};
