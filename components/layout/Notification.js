import React from 'react';
import styles from '../../styles/Notification.module.css';

const Notification = ({ notifications }) => {
  return (
    <section className={styles.notification__banner}>
      <>
        {notifications.first !== '' && (
          <p className={styles.notification}>{notifications.first}</p>
        )}
      </>
      <>
        {notifications.second !== '' && (
          <p className={styles.notification}>{notifications.second} </p>
        )}
      </>
      <>
        {notifications.third !== '' && (
          <p className={styles.notification}>{notifications.third} </p>
        )}
      </>
    </section>
  );
};

export default Notification;
