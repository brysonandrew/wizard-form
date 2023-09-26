import { defineConfig } from 'unocss';
import { THEME, TTheme } from './theme';
import { RULES } from './rules';
import { SHORTCUTS } from './shortcuts';
import { PRESETS } from './presets';
import { PREFLIGHTS } from './preflights';
import { TRANSFORMERS } from './transformers';

const config = defineConfig<TTheme>({
  theme: THEME,
  rules: RULES,
  shortcuts: SHORTCUTS,
  presets: PRESETS,
  preflights: PREFLIGHTS,
  transformers: TRANSFORMERS,
});

export type TUnoConfig = typeof config;

export default config;
