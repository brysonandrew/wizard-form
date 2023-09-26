import { join, resolve } from 'path';
import { ENTRY_FILE_NAME } from '../../app';
import { ACTIVE_PAGES } from './active';
import { WIP_PAGES } from './wip';
import { ROOT_DIR } from '../constants';

export const PAGE_PATH = 'src/pages';
const PAGES_ROOT = resolve(ROOT_DIR,  PAGE_PATH);
const resolveName = (name:string) =>name.replace(/\//g, '-')
const resolveEntry = (name: string): `/${string}` => `/${join(PAGES_ROOT, name, ENTRY_FILE_NAME)}`;
const resolvePage = (name: string) => ({  name: resolveName(name), entry: resolveEntry(name) });
const resolvePagesToSingleEntry = (pages: string[], entryName: string) =>
  pages.map((name: string) => ({ name: resolveName(name), entry: resolveEntry(entryName) }));

const basePages = ACTIVE_PAGES.map(resolvePage);
const wipPages = resolvePagesToSingleEntry(WIP_PAGES, "wip");

export const pages = [...wipPages, ...basePages];
