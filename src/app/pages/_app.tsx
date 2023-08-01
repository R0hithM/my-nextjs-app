// src/app/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '../layout';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
