import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PAGE_STEP_KEY } from '@constants/index';
import { usePages } from '@hooks/usePages';

export const Wizard: FC = () => {
  const [searchParams] = useSearchParams();
  const curr = searchParams.get(PAGE_STEP_KEY);
  const pages = usePages();
  const page = pages.find((v) => v.id === curr);
  return (
    <div className='w-screen h-screen bg-red'>
      <ul className='row w-full h-full bg-purple'>
        <li className='row w-full h-full bg-green'>{curr && <>{page}</>}</li>
      </ul>
    </div>
  );
};
