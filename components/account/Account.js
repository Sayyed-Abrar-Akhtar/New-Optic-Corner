import React from 'react';

import styles from '../../styles/Account.module.css';

const Account = ({
  pageHeading,
  bannerImage,
  captionTitle,
  captionSubtitle,
  children,
}) => {
  return (
    <section className={styles.container}>
      <h2 className='heading'>{pageHeading}</h2>
      <section className={styles.content}>
        <section
          className={styles.banner}
          style={{
            backgroundImage: `var(--linear-gradient-dark), url(${bannerImage})`,
          }}
        >
          <div className={styles.caption}>
            <h4 className={styles.caption__title}>{captionTitle}</h4>
            <p className={styles.caption__subtitle}>{captionSubtitle}</p>
          </div>
        </section>
        {children}
      </section>
    </section>
  );
};

export default Account;
