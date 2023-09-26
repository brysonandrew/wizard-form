import { MpaOptions, AllowedEvent } from 'vite-plugin-virtual-mpa';
import { pages } from '../pages';
import { REWRITES } from '../rewrites';

export const CREATE_MPA_CONFIG: MpaOptions<string, string, string, AllowedEvent, string> = {
  verbose: true,
  template: 'src/template.html',
  pages: pages ?? [],
  rewrites: REWRITES,
};
