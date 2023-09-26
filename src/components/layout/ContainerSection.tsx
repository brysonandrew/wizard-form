import styled from '@emotion/styled';
import { FC, HTMLProps } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { Container } from './Container';

const Root = styled.section``;
type TProps = HTMLProps<HTMLDivElement> & { classValue?: ClassValue; };
export const ContainerSection: FC<TProps> = ({ classValue, children }) => (
  <Root className={clsx('column', classValue)}>
    <Container>
      {children}
    </Container>
  </Root>
);
