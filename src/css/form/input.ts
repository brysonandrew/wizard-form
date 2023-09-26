import { css } from '@emotion/react';
import { EDIT_MODIFIER_CLASS } from '.';

export const inputColorCss = css`
  background-color: var(--form-teal);
  border: 1px solid var(--form-blue);
  &.${EDIT_MODIFIER_CLASS} {
    background-color: var(--form-white);
  }
`;

const inputCss = css`
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 300;
  line-height: 22px;
  ${inputColorCss}
`;

export const textareaCss = css`
  display: block;
  resize: vertical;
  ${inputCss}
`;

export const rowInputCss = css`
  height: 50px;
  ${inputCss}
`;
