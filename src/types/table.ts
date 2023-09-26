import { TAnchorProps } from './react';
import { TStrRecord } from './shapes';
import { TdHTMLAttributes } from 'react';
import { TClassValueProps, TTableProps } from '@t/react';

export type TTableColumnsProps = {
  columns: string[];
};

export type TRowValue = string | number | TAnchorProps | JSX.Element;

export type TColSchema = TStrRecord;

export type TPartialColumn = Partial<{ accessorKey: string }>;

export type TSetTableRefHandler = (instance: HTMLTableElement) => void;
export type TSetTableRefProps = {
  setRef?: TSetTableRefHandler;
};

export type TCellPropsResolver = (
  rowIndex: number,
  colIndex: number,
) => (TdHTMLAttributes<HTMLTableCellElement> & TClassValueProps) | undefined;
export type TCellPropsResolverProps = {
  cellPropsResolver?: TCellPropsResolver;
};

export type TResizeOptionalProps = {
  onUpdateTableWidthForResize?(id: string): void;
};

export type TOptionalProps = TSetTableRefProps &
  TCellPropsResolverProps & {
    tableProps?: TTableProps;
  };

export const CONTROL_KEYS = ['SEARCH', 'PAGING'] as const;
export type TExcludedControlKey = typeof CONTROL_KEYS[number];
export type TExcludedControls = readonly TExcludedControlKey[];

export type TExcludedControlsProps = { excludedControls?: TExcludedControls };
