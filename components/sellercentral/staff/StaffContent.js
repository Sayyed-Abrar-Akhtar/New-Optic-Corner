import React from 'react';

import DashboardHeader from '../header/DashboardHeader';
import Sidebar from '../sidebar/Sidebar';

import styles from '../../../styles/AdminContent.module.css';

const StaffContent = ({ baseUrl, menus, children }) => {
  return (
    <section className={styles.container}>
      <DashboardHeader baseUrl={baseUrl} />
      <section className={styles.content}>
        <Sidebar menus={menus} baseUrl={baseUrl} />
        <main className={styles.main}>{children}</main>
      </section>
    </section>
  );
};

export default StaffContent;
