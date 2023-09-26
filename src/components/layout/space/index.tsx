
import { FC, createElement } from 'react';
import { clsx } from 'clsx';
import { TSpaceProps } from './config';

type TProps = TSpaceProps & {
    spaceClass: `p-${'0.25'|'0.5'|'1'|'1.5'|'2'|'3'|'4'|'8'|'16'}`
  };
export const Space: FC<TProps> = ({ element = 'div', spaceClass, classValue, children, ...props }) => {
  return createElement(element, { className: clsx(spaceClass, classValue), ...props }, children);
};
