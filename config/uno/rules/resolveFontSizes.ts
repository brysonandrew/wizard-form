import type { TTheme } from '../theme';
import { Rule } from 'unocss';

const UNITS = ['em', 'rem'] as const;
export const resolveFontSizes = (...sizes: number[]) => {
  return sizes.reduce((a: Rule<TTheme>[], value: number) => {
    const next: Rule<TTheme>[] = UNITS.map((unit) => [
      `text-${value.toString().replace('.', '_')}${unit}`,
      {
        'font-size': `${value}${unit}`,
      },
    ]);
    return [...a, ...next];
  }, []);
};
