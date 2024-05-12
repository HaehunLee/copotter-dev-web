import { css } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  pageProps: AppProps['pageProps'];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  const title = pageProps?.title || 'Copotter | Dev';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <main
        css={css`
          width: 100%;
          min-height: 100dvh;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
