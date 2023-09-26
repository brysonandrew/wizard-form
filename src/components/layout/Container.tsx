import styled from '@emotion/styled';
import { FC, HTMLProps } from 'react';
import { clsx } from 'clsx';
import { TClassValueProps } from '@t/react/attributes';

const Root = styled.div``;
type TProps = HTMLProps<HTMLDivElement> & TClassValueProps;
export const Container: FC<TProps> = ({ classValue, children }) => {
  return <Root className={clsx('w-container', classValue)}>{children}</Root>;
};
