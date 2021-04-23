import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center dark:bg-black">
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen font-sans login bg-cover">{children}</div>
    </div>
  );
};

export default Layout;
