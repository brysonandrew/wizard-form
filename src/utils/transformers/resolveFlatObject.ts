export const resolveFlatObject = <I extends object, O extends object>(inputs: I[]) => {
  const flatObject = inputs.reduce<O>((a, c: I) => ({ ...a, ...c }), {} as O);
  return flatObject;
};
