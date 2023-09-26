import { P8 } from '@components/layout/space/P8';
import styled from '@emotion/styled';
import type { FC } from 'react';

const Root = styled.section``;

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = ({ error, reset }) => (
  <Root className='w-full' role='alert' onClick={reset}>
    <div className='column'>
      <P8 />
      <h1 className='text-l'>Something went wrong</h1>
      {typeof error.message === 'string' && (
        <>
          <P8 />
          <h2>{error.message}</h2>
        </>
      )}
    </div>
  </Root>
);
