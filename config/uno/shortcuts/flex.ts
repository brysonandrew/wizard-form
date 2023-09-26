import { StaticShortcutMap } from 'unocss';

export const FLEX: StaticShortcutMap = {
  row: 'flex flex-row items-center',
  'row-start': 'flex flex-row items-start',
  'row-end': 'flex flex-row items-end',
  'row-space': 'row justify-between',
  'row-right': 'row justify-end',
  'row-space-start': 'row-start justify-between',
  column: 'flex flex-col items-center',
  'column-start': 'flex flex-col items-start',
  'column-space': 'column justify-between',
  'column-space-start': 'column-start justify-between',
  center: 'flex items-center justify-center',
};
