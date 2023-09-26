import { ROLLUP_OPTIONS } from './rollup';
import { DIST_DIR_NAME } from '../../app';
import { resolve } from 'path';
import { ROOT_DIR } from '../constants';
import { BuildOptions } from 'vite';

const OUT_DIR = resolve(ROOT_DIR, DIST_DIR_NAME);

export const BUILD: BuildOptions = {
  outDir: OUT_DIR,
  emptyOutDir: true,
  manifest: true,
  rollupOptions: ROLLUP_OPTIONS,
};
