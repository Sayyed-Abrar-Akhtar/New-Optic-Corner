import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import Notification from './Notification';
import Subscription from './Subscription';
import { getCartItems } from '../../redux/actions/cartItemsAction';

const Layout = ({
  title = 'Home | New Optic Corner',
  description = 'The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.',
  ogUrl = 'https://www.newopticcorner.com.np',
  ogImage = 'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635756426/Group_27_tlgj6a.png',
  children,
  classValue,
}) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.getTheme);
  const { cartItems } = useSelector((state) => state.newCartItem);

  const styleTag = `
    :root {
      --primary-color: ${theme.theme.primary_color};
      --primary-color-light: ${theme.theme.primary_color_light};
      --primary-color-dark: ${theme.theme.primary_color_dark};
      --linear-gradient: ${theme.theme.linear_gradient}
    }
  `;

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

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
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:creator'
          content='Abdullah Muslim | New Optic Corner'
        />
        <meta name='twitter:title ' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        <link rel='icon' href='/favicon.ico' />
        <style>{styleTag}</style>
      </Head>
      <Notification notifications={theme.notification} />
      <Header cartItems={cartItems} />

      <main className={classValue && classValue}>{children}</main>
      <div className='toast-message-container'>
        <ToastContainer />
      </div>
      <Subscription />
      <Footer />
    </>
  );
};

export default Layout;
