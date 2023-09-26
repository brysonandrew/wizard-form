export const strSortCase = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
};

export const strSort = (a: string, b: string) => {
  a = a.toUpperCase();
  b = b.toUpperCase();
  return strSortCase(a, b);
};

export const numSort = (a: number, b: number) => a - b;
