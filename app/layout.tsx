import { type ReactNode } from 'react';

import { Lexend_Deca } from 'next/font/google';

import { Providers } from '../src/providers';

interface IRootLayoutProps {
  children: ReactNode;
}

const ubuntu = Lexend_Deca({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
});

const RootLayout = (props: IRootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="en" data-theme="light">
      <body className={ubuntu.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
