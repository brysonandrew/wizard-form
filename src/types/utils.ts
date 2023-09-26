export type TUnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
export type TNullable<T> = { [K in keyof T]: T[K] | null };
