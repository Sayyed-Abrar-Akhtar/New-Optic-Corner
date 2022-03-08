import React from 'react';
import { GREETING, SALUTATION } from '../../constant/GlobalConstants';

import styles from '../../styles/Dashboard.module.css';

const Dashboard = ({ name = 'Sayyed Abrar Akhtar' }) => {
  return (
    <>
      <div className={styles.nav_toggle}>
        <span className={`${styles.bar} ${styles.top}`}></span>
        <span className={`${styles.bar} ${styles.middle}`}></span>
        <span className={`${styles.bar} ${styles.bottom}`}></span>
      </div>
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.user_detail}>
            <h2 className={styles.salaam}>{GREETING}</h2>
            <p className={styles.salutation}> {SALUTATION}</p>
            <p className={styles.name}>{name}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
