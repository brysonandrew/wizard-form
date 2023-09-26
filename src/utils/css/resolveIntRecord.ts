import { TPxRecord, TPxEntries, TPxEntry, TIntRecord } from '@t/shapes';
import { stripPx } from './stripPx';

export const resolveIntRecord = (pxRecord: TPxRecord) => {
  const entries = Object.entries(pxRecord) as TPxEntries;
  const intRecord = entries.reduce(
    (a, [key, value]: TPxEntry) => ({
      ...a,
      [key]: stripPx(value),
    }),
    {} as TIntRecord,
  );

  return intRecord;
};
