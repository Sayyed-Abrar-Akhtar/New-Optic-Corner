import Link from 'next/link';
import React from 'react';
import {
  MdOutlineDashboard,
  MdOutlineLocalMall,
  MdStorefront,
  MdOutlinePeopleAlt,
  MdTag,
  MdRemoveRedEye,
} from 'react-icons/md';

import {
  CUSTOMIZE,
  ORDERS,
  PRODUCTS,
  STAFFS,
  TAGS,
  WEBSITE,
} from '../../../constant/GlobalConstants';

import styles from '../../../styles/Sidebar.module.css';

const SidebarItem = ({ menuType, menuLink, menuName, menuId, baseUrl }) => {
  switch (menuType) {
    case PRODUCTS:
      return (
        <li className={styles.item} id={menuId}>
          <MdOutlineDashboard className={styles.icon} />
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );

    case ORDERS:
      return (
        <li className={styles.item} id={menuId}>
          <MdOutlineLocalMall className={styles.icon} />
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );

    case CUSTOMIZE:
      return (
        <li className={styles.item} id={menuId}>
          <MdStorefront className={styles.icon} />
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );
    case STAFFS:
      return (
        <li className={styles.item} id={menuId}>
          <MdOutlinePeopleAlt className={styles.icon} />
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );

    case TAGS:
      return (
        <li className={styles.item} id={menuId}>
          <MdTag className={styles.icon} />
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );

    case WEBSITE:
      return (
        <li className={styles.item} id={menuId}>
          <MdRemoveRedEye className={styles.icon} />
          <Link href={menuLink}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );

    default:
      return (
        <li className={styles.item}>
          <Link href={`${baseUrl}${menuLink}`}>
            <a className={styles.link}>{menuName}</a>
          </Link>
        </li>
      );
  }
};

export default SidebarItem;
