import { Rule } from 'unocss';
import { HEADER_HEIGHT_REM, NAV_WIDTH_REM } from '../../app/dimensions';
import type { TTheme } from '../theme';
import { resolveFontSizes } from './resolveFontSizes';

const fontSizes = resolveFontSizes(0.8, 1, 1.2, 1.4);

export const RULES: Rule<TTheme>[] = [
  ...fontSizes,
  [
    'min-h-content',
    {
      'min-height': `calc(100vh - ${HEADER_HEIGHT_REM})`,
    },
  ],
  [
    'w-content',
    {
      width: `calc(100% - ${NAV_WIDTH_REM})`,
    },
  ],
];
