import { RewriteRule } from 'vite-plugin-virtual-mpa';

export const REWRITES: RewriteRule = [
  { from: /^\/$/, to: '/basic.html' },
];
