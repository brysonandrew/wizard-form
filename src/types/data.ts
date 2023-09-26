export type TBreakableText = string | string[]
export type TPath = `/${string}`
export type TSearchWithParams = `${TPath}?${string}`

export type TStrKeyValuePair = {key:string,value:string}
export type TStrEntry = [key:string,value:string]
export type TStrEntries =  TStrEntry[]