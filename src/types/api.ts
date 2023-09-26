
export type TError = any;

export type TApiPathname  =  `/${string}.${string}`
export type TApiPathnameWithSearch = `${TApiPathname}?${string}`
export type TApiPath = TApiPathname | TApiPathnameWithSearch;
export type TApiUrl = TApiPath | `${string}${TApiPath}`

export type TPageDataGuard  = {pageData: boolean}

export type TYesOrNo = 'Y' | 'N';