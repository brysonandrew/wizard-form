import { StaticShortcutMap } from 'unocss';
import { FLEX } from './flex';
import { GRID } from './grid';
import { POSITION } from './position';

export const SHORTCUTS: StaticShortcutMap = {
  ...FLEX,
  ...GRID,
  ...POSITION,
  'w-container': 'w-full sm:w-sm md:w-md lg:w-lg xl:w-xl',
  'overflow-scroll-x-only': 'overflow-x-auto overflow-y-hidden',
  'interactive-disabled': 'disabled:(brightness-90 cursor-not-allowed)',
};
