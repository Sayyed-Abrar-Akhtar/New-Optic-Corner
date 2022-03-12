import React from 'react';

import styles from '../../../styles/AdminLayout.module.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.container}>
      <section className={styles.bg}>{children}</section>
    </main>
  );
};

export default Layout;
