export type FlattenKeys<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: `${T[K] & string}${'' extends FlattenKeys<T[K]>
        ? ''
        : '.'}${FlattenKeys<T[K]>}`
    }[keyof T]
  : ''
