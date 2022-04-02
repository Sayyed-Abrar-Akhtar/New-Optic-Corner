import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../../../styles/AdminLayout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.bg}>{children}</section>
      </main>
      <div className='toast-message-container'>
        <ToastContainer />
      </div>
    </>
  );
};

export default Layout;
