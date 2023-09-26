import { css } from '@emotion/react';

export const tableCss = css`
  display: table;
  box-sizing: content-box;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 80%;
  line-height: 1.21428571429;
`;

const tableCellBaseCss = css`
  padding: 9px;
  box-sizing: border-box;
  border-top-width: 0;
  border-bottom-width: 0;
  font-size: 0.8rem;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const tableHeadCss = css`
  ${tableCellBaseCss}
  font-weight: 700;
  text-align: center;
  color: var(--white);
  background-color: var(--navy);
`;

export const tableHead1Css = css`
  ${tableCellBaseCss}
  font-weight: 700;
  text-align: center;
  color: var(--white);
  background-color: var(--bright-blue-1);
`;

export const tableHead2Css = css`
  ${tableCellBaseCss}
  font-weight: 700;
  color: var(--white);
  background-color: var(--bright-blue);
`;

export const tableCellCss = css`
  ${tableCellBaseCss}
  font-weight: 400;
`;

export const cellNoWrapCss = css`
  & th,
  td {
    white-space: nowrap;
  }
`;
