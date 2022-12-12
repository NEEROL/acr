import type { ReactNode } from 'react';
import { titleTemplate } from '@pages/_app';
import { NextSeo } from 'next-seo';
import { Header } from '@components/Header/Header';
import { SolidLine } from '@components/SolidLine/SolidLine';
import { Footer } from '@components/Footer/Footer';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <SolidLine />
      <Header />
      <main>{children}</main>
      <Footer />
      <NextSeo
        title={title ? titleTemplate.replace('%s', title) : title}
        openGraph={{
          title: title ? titleTemplate.replace('%s', title) : title
        }}
      />
    </>
  );
};

export { Layout };
