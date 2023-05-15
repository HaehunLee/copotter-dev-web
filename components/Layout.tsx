import { ReactNode } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { css } from "@emotion/react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  pageProps: AppProps["pageProps"];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  const title = pageProps?.title || "copotter";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
