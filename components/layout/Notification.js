import React from 'react';
import styles from '../../styles/Notification.module.css';

const Notification = () => {
  return (
    <section className={styles.notification__banner}>
      <p className={styles.notification}>up to 10% dewali discount</p>
      {/* <p className={styles.notification}>Notification 2</p>
      <p className={styles.notification}>Notification 3</p> */}
    </section>
  );
};

export default Notification;
