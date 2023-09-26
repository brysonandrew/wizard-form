import { TBreakableText } from '@t/data';

export const capitalize = (word: string | null) =>
  word ? `${word[0].toUpperCase()}${word.toLowerCase().slice(1)}` : '';

export const kebabToTitle = (slug: string): string => slug.split('-').map(capitalize).join(' ');
export const kebabToPascal = (slug: string): string => slug.split('-').map(capitalize).join('');
export const pascalToTitle = (pascal: string): string => pascal.split(/(?=[A-Z])/).join(' ');

export const titleToKebab = (title: string): string =>
  title
    .replace(/-/g, '')
    .split(/\s/g)
    .map((v) => v.toLowerCase())
    .join('-');

export const titleToPascal = (title: string): string => title.replace(/[-\s]/g, '');

export const decimalSeparators = (value: number | string) => Number(value).toLocaleString();

export const breakableTextToOneLine = (value: TBreakableText) =>
  Array.isArray(value) ? value.join(' ') : value;

export const BR_TAG = "<br>"
type TBrTag = typeof BR_TAG
export type TStrWithBrTag = `${string}${TBrTag}${string}`
export const brTagToNl = (value: TStrWithBrTag) =>
  value.replace(new RegExp(BR_TAG, 'g'), '\n')
