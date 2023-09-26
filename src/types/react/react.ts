export type TChildrenElements = JSX.Element[];

export type TChildrenElement = JSX.Element | TChildrenElements;

export type TChildren = string | TChildrenElement | null;

export type TChildrenProps = { children: TChildren | TChildren[] };
