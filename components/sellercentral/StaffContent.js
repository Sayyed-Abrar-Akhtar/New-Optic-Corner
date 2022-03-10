import React from 'react';
import DashboardHeader from './DashboardHeader';

import styles from '../../styles/AdminContent.module.css';
import Sidebar from './Sidebar';

const StaffContent = ({ homeLink, menus, children }) => {
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

export default StaffContent;
