export const resolveDateFormat = (ddMmYyyy?: number) => {
  if (!ddMmYyyy) return null;
  const str = String(ddMmYyyy);
  const dd = str.slice(6, 8);
  const mm = str.slice(4, 6);
  const yyyy = str.slice(0, 4);
  let text = [dd, mm, yyyy].join('/');
  text = `(Data Date: ${text})`;
  return text;
};
