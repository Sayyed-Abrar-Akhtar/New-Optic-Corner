import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import Notification from './Notification';

const Layout = ({
  title = 'Home | New Optic Corner',
  description = 'The latest and trendy eyewear, lenses, power glasses, sunglasses online first time in Nepal.',
  ogUrl = 'https://www.newopticcorner.com.np',
  ogImage = '',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content='New Optic Corner' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Notification />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
