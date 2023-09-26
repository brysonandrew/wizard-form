import * as unoConfig from '@uno/index';
import { THEME } from '@uno/theme';

export type TUnoConfig = unoConfig.TUnoConfig;
export type TColorKey = keyof typeof THEME.colors;
export type TBreakpointKey = keyof typeof THEME.breakpoints;
export type TBreakpointRecord = Record<TBreakpointKey, string>;
export type TBreakpointEntry = [TBreakpointKey, string];
export type TBreakpointEntries = TBreakpointEntry[];
export type TBreakpointIntRecord = Record<TBreakpointKey, number>;
