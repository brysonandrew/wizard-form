import { Preflight, PreflightContext } from 'unocss';
import { TAnyTheme, TTheme } from './theme';

const SANS = 'Ariel';

export const PREFLIGHTS: Preflight<TAnyTheme>[] = [
  {
    getCSS: ({ theme }: PreflightContext<TTheme>) => `
      body {
        font-family: ${SANS}, Helvetica, sans-serif;
        background-color: ${theme.colors['white']};
        color: ${theme.colors['black']};
      }
    `,
  },
];
