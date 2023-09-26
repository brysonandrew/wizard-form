export { resolveFlatObject } from './resolveFlatObject';

export const appendToAllItems = <T extends object, K extends keyof T>(
  items: Omit<T, K>[],
  next: Pick<T, K>,
): T[] =>
  items.map(
    (v) =>
      ({
        ...v,
        ...next,
      } as T),
  );
