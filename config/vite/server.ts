import { ServerOptions } from 'vite';
import { DEV_PORT, HOST } from '../app';

export const SERVER: ServerOptions = {
  host: HOST,
  port: DEV_PORT,
};
