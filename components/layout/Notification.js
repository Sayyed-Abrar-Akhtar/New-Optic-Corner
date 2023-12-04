import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Notification.module.css';

const Notification = ({ notifications }) => {
  return (
    <section className={styles.notification__banner}>
      <>
        {notifications.first !== '' && (
          <p className={styles.notification}>
            <span>{notifications.first}</span>
            <span className={styles.flag}>
              <Image
                src='/assets/flagOfNepal.png'
                width={50}
                height={50}
                alt={'flag of Nepal'}
              />
            </span>
          </p>
        )}
      </>
      <>
        {notifications.second !== '' && (
          <p className={styles.notification}>
            <span>{notifications.second}</span>
            <span className={styles.flag}>
              <Image
                src='/assets/flagOfNepal.png'
                width={50}
                height={50}
                alt={'flag of Nepal'}
              />
            </span>{' '}
          </p>
        )}
      </>
      <>
        {notifications.third !== '' && (
          <p className={styles.notification}>
            <span>{notifications.third}</span>{' '}
            <span className={styles.flag}>
              <Image
                src='/assets/flagOfNepal.png'
                width={50}
                height={50}
                alt={'flag of Nepal'}
              />
            </span>
          </p>
        )}
      </>
    </section>
  );
};

export default Notification;
