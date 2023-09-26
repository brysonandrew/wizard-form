import { HOST, CORS_PROXY_PORT, PROTOCOL } from '@app/config';
import { resolveApiBase } from './resolveApiBase';

export const resolveApiCorsBase = () => {
  if (import.meta.env.DEV) {
    const apiBase = resolveApiBase();
    return `${PROTOCOL}${HOST}:${CORS_PROXY_PORT}/${apiBase}`;
  }
  return '';
};
