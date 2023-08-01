import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
