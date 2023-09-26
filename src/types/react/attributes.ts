import { SerializedStyles } from '@emotion/react';
import { ClassValue } from 'clsx';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FormHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';

export type TClassValueProps = { classValue?: ClassValue };

export type TCssProps = { css: SerializedStyles };

export type TElementProps = HTMLAttributes<HTMLElement>;

export type TDivProps = HTMLAttributes<HTMLDivElement>;

export type TSpanProps = HTMLAttributes<HTMLSpanElement>;

export type THeadingProps = HTMLAttributes<HTMLHeadingElement>;

export type TUlProps = HTMLAttributes<HTMLUListElement>;

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type TAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type TParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export type TImgProps = ImgHTMLAttributes<HTMLImageElement>;

export type TTableProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type TThProps = ThHTMLAttributes<HTMLTableCellElement>;

export type TTdProps = TdHTMLAttributes<HTMLTableCellElement>;

export type TFormProps = FormHTMLAttributes<HTMLFormElement>;
