import { resolveId } from 'config/app/resolveId';
import { useMemo } from 'react';
import { resolvePath } from 'react-router';

export const usePages = () => {
  const pages = useMemo(() => {
    const results = [
      {
        title: 'Heart Questions',
        component: <div>heart</div>,
      },
      {
        title: '',
        component: <div>2</div>,
      },
      {
        title: '',
        component: <div>3</div>,
      },
      {
        title: '',
        component: <div>4</div>,
      },
    ].map((v) => ({ id: v.title.toLowerCase().replace(/\s/, '-'), ...v }));

    return results;
  }, []);

  return pages;
};
