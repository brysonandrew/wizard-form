export const rewrite = (...paths: string[]) => {
  const to = paths[paths.length - 1];
  const froms = paths.slice(0, -1).join('|');
  const result = {
    from: new RegExp(`^\\/(${froms})(?:.aspx)?$`, 'gi'),
    to: `/${to}.html`,
  };
  return result;
};
