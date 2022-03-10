import React from 'react';

import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';

import styles from '../../styles/AdminContent.module.css';

const AdminContent = ({ homeLink, menus, children }) => {
  return (
    <section className={styles.container}>
      <DashboardHeader homeLink={homeLink} />
      <section className={styles.content}>
        <Sidebar menus={menus} url={homeLink} />
        <main className={styles.main}>{children}</main>
      </section>
    </section>
  );
};

export default AdminContent;
