export const COLOR_VARIABLES_LOOKUP = {
  purple: '#000033',
  navy: '#0f2d76',
  yellow: '#fada5e',
  red: '#ff0000',
  orange: '#f28334',
  green: '#117061',
  blue: '#00c5ff',
  'light-blue': '#2baed7',
  'bright-blue': '#577ee9',
  gray: '#b4bdd4',
  teal: '#157297',
  white: '#fff',
  black: '#000',
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
};

export type TColorKey = keyof typeof COLOR_VARIABLES_LOOKUP;

export const COLOR_VARIABLES_CSS = Object.entries(COLOR_VARIABLES_LOOKUP).reduce(
  (a, [key, value]) => {
    return `${a}
--${key}: ${value};`;
  },
  ``,
);
