import packageJson from '../../package.json';

export const resolveRemFromPx = (px: number, base = 16) => `${px / base}rem`;

export const VERSION = packageJson.version;

export const INDEX_HTML = 'index.html';
export const ENTRY_FILE_NAME = 'main.tsx';

export const PROTOCOL = 'http://';
export const HOST = 'localhost';
export const DEV_PORT = 3000;
export const CORS_PROXY_PORT = 3001;

export const PUBLIC_ASSETS_DIR_NAME = 'assets';
export const DIST_DIR_NAME = 'dist';
