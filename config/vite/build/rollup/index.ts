import type { OutputOptions, PreRenderedAsset, PreRenderedChunk, RollupOptions } from 'rollup';
import { resolveId, resolveSeededHash } from '../../../app/resolveId';
import { VERSION } from '../../../app';
import { getRandomValues } from 'node:crypto';

const hash = resolveId(10, getRandomValues);

const VERSION_HASH = `__${VERSION.replace(/[.]/g, '_')}_${hash}__`;

const resolveHashFromChunk = (info: PreRenderedChunk) => resolveSeededHash(info.moduleIds.join(''));

const resolveOutput = (pattern: string) => ({
  entryFileNames: (info: PreRenderedChunk) => {
    const pathHash = resolveHashFromChunk(info);
    return `assets/${pattern}-${pathHash}.js`; // TODO change subdir back to entries
  },
  chunkFileNames: (info: PreRenderedChunk) => {
    const pathHash = resolveHashFromChunk(info);
    return `assets/${pattern}-${pathHash}.js`; // TODO change subdir back to chunks
  },
  assetFileNames: (_: PreRenderedAsset) => {
    return `assets/${pattern}.[ext]`;
  },
});

const ROLLUP_OPTIONS_OUTPUT: OutputOptions = resolveOutput(`[name]-${VERSION_HASH}`);

export const ROLLUP_OPTIONS: RollupOptions = {
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }
    warn(warning);
  },
  output: {
    ...ROLLUP_OPTIONS_OUTPUT,
  },
};
