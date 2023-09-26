import { css } from '@emotion/react';

export const baseHeadingCss = css`
  font-weight: 400;
  color: var(--gray-4);
  line-height: 1.1;
`;

export const titleCss = css`
  font-size: 1.4em;
  ${baseHeadingCss}
`;

export const title1Css = css`
  font-size: 1em;
  color: var(--gray-4);
  font-weight: 700;
`;

export const title3Css = css`
  font-size: 1.2em;
  color: var(--gray-4);
  font-weight: 400;
  line-height: 1.1;
`

export const subtitleCss = css`
  color: var(--teal);
  line-height: 1.21428571429;
  font-size: 1em;
`;

export const numberCss = css`
  color: var(--purple-1);
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 2;
`;

export const itemTextCss = css`
  color: var(--teal);
`;
