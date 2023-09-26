import { Global, css } from '@emotion/react';
import { COLOR_VARIABLES_CSS } from '@app/colors';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${COLOR_VARIABLES_CSS};
        }
      `}
    />
  );
};
