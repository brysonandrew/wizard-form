import * as unoConfig from '@uno/index';
import { TTheme, THEME } from '@uno/theme';
import { resolveIntRecord } from '@utils/css/resolveIntRecord';

export const UNO_CONFIG = unoConfig.default;
export const UNO_THEME: TTheme = THEME;
export const BREAKPOINT_RECORD = UNO_THEME.breakpoints;

export const BREAKPOINT_INT_RECORD = resolveIntRecord(BREAKPOINT_RECORD);

export const WIDTH_RECORD = UNO_THEME.width;

const { nav, ...breakpointRecord } = WIDTH_RECORD;

export const WIDTH_INT_RECORD = resolveIntRecord(breakpointRecord);

export const COLOR_RECORD = UNO_THEME.colors;
