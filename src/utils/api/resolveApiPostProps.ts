import { prependBase } from '@utils/api';
import { resolveApiPathname } from '@utils/api/resolveApiPathname';
import { resolvePostProps } from './resolvePostProps';

export const resolveApiPostProps = (base: string) => {
  const apiPathname = resolveApiPathname(base);
  const apiUrl = prependBase(apiPathname);
  return resolvePostProps(apiUrl);
};
