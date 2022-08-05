import React, { useEffect, useState } from 'react';

import styles from '../../styles/MobileNavigation.module.css';
import MenuList from '../layout/MenuList';

const MobileNavigation = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label
        htmlFor='nav-toggle'
        className={styles.mob_nav_label}
        onClick={(e) => setChecked(!checked)}
      >
        <span className={styles.hamburger_menu}></span>
      </label>
      {checked && (
        <div className={styles.mob_nav_container}>
          <MenuList mobile='true' mobileStyles={styles.menu_container} />
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
