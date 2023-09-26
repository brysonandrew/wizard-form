import { COLOR_VARIABLES_LOOKUP, TColorKey } from '../../app/colors';

const colors = Object.keys(COLOR_VARIABLES_LOOKUP).reduce(
  (a, key) => ({
    [key]: `var(--${key})`,
    ...a,
  }),
  {},
);

export const COLORS = colors as Record<TColorKey, string>;
