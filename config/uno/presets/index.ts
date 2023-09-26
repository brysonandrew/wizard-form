import { Preset, definePreset, presetUno } from 'unocss';
import { TAnyTheme, TTheme } from '../theme';
import { ICONS } from './icons';

export type TPresets = (Preset<TTheme> | Preset<TTheme>[])[];
export const PRESETS: TPresets = [definePreset<TAnyTheme>(presetUno()), ICONS];
