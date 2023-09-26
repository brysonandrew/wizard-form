import { NAV_WIDTH_REM, HEADER_HEIGHT_REM } from '../../app/dimensions';
import { COLORS } from './colors';

export const THEME = {
  breakpoints: {
    xxxs: '280px',
    xxs: '320px',
    xs: '375px',
    sm: '480px',
    md: '768px',
    lg: '900px',
    xl: '1100px',
    xxl: '1400px',
    xxxl: '1800px',
  },
  width: {
    sm: '480px',
    md: '700px',
    lg: '840px',
    xl: '1000px',
    nav: NAV_WIDTH_REM,
  },
  height: {
    header: HEADER_HEIGHT_REM,
  },
  spacing: {
    header: HEADER_HEIGHT_REM,
  },
  colors: COLORS,
} as const;

export type TTheme = typeof THEME;

export type TAnyTheme = TTheme & any;
