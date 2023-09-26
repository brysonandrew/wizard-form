import { TApiPathname } from '@t/api';
import { isForwardSlashStart, isApiExtEnd } from '.';

export const EXT_ACTIVE_SERVER_PAGE_EXTENDED = 'aspx';

export const resolveApiPathname = (key: string): TApiPathname => {
  if (!isForwardSlashStart(key)) {
    key = `/${key}`;
  }
  if (!isApiExtEnd(key)) {
    key = `${key}.${EXT_ACTIVE_SERVER_PAGE_EXTENDED}`;
  }
  return key as TApiPathname;
};
