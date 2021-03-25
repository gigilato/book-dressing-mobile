export type Nullable<T> = T | null
export type Promisable<T> = T | Promise<T>
export type LiteralUnion<T extends U, U = string> = T | (U & {})
