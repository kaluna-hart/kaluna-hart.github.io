import * as React from 'react';

declare module 'react' {
  type FCX<P = unknown> = FunctionComponent<P & { className?: string }>;

  type ImgHTMLAttributes<T = unknown> = HTMLAttributes<T & { loading?: 'lazy' | 'eager' | 'auto' | '' }>;
}
