export type FlattenValues<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: '' extends FlattenValues<T[K]>
        ? T[K]
        : FlattenValues<T[K]>
    }[keyof T]
  : ''
