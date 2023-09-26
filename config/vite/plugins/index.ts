import tsConfigPaths from 'vite-tsconfig-paths';
import unoCss from 'unocss/vite';
import { createMpaPlugin } from 'vite-plugin-virtual-mpa';
import { CREATE_MPA_CONFIG } from './mpa';
import { PluginOption } from 'vite';

export const PLUGINS: PluginOption[] = [
  tsConfigPaths(),
  createMpaPlugin(CREATE_MPA_CONFIG),
  unoCss(),
];
