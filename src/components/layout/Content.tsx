import { PropsWithChildren } from 'react';
import Inner from '../Inner';

export function Content({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Inner>{children}</Inner>
    </main>
  );
}
