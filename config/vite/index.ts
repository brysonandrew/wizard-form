import { resolve } from 'path';
import { defineConfig } from 'vite';
import { PLUGINS } from './plugins';
import { PUBLIC_ASSETS_DIR_NAME } from '../app';
import { ROOT_DIR } from './constants';
import { BUILD } from './build';
import { SERVER } from './server';

const PUBLIC_ASSETS_OUTPUT = resolve(ROOT_DIR, PUBLIC_ASSETS_DIR_NAME);

const config = defineConfig({
  // base: './', //turn on for testing locally
  build: BUILD,
  server: SERVER,
  publicDir: PUBLIC_ASSETS_OUTPUT,
  appType: 'mpa',
  plugins: PLUGINS,
});

export default config;
