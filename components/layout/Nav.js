import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { menus } from '../../utils/menuData';
import styles from '../../styles/Nav.module.css';
import { useSession } from 'next-auth/react';
import {
  ADMIN,
  AUTHENTICATED,
  LOADING,
  STAFF,
  UNAUTHENTICATED,
  USER,
} from '../../constant/GlobalConstants';

const Nav = () => {
  const { data: session, status } = useSession();

  let role = '';
  let name = '';

  if (status === AUTHENTICATED) {
    role = session.user.role;
    name = session.user.name;
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.lists}>
        {menus.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <a className={styles.link}>
              <li className={styles.list} id={menu.id}>
                {menu.text}
              </li>
            </a>
          </Link>
        ))}
        <Link href='/cart'>
          <a className={styles.link}>
            <li className={styles.list} id='cart'>
              Cart
            </li>
          </a>
        </Link>
        {(status !== LOADING && status) === UNAUTHENTICATED ? (
          <Link href='/account'>
            <a className={styles.link}>
              <li className={styles.list} id='login'>
                login
              </li>
            </a>
          </Link>
        ) : status === AUTHENTICATED && role === ADMIN ? (
          <Link href={`/authenticated/${role}/${session.user._id}`}>
            <a className={styles.link}>
              <li className={`${styles.list} ${styles.user}`} id='/admin'>
                <span
                  className={styles.profile_image}
                  style={{
                    backgroundImage: `url('${
                      session.user.avatar.url && session.user.avatar.url
                    }')`,
                  }}
                ></span>
                {name.split(' ')[name.split(' ').length - 1]}
              </li>
            </a>
          </Link>
        ) : role === STAFF ? (
          <Link href={`/authenticated/${role}/${session.user._id}`}>
            <a className={styles.link}>
              <li className={`${styles.list} ${styles.user}`} id='/staff'>
                <span
                  className={styles.profile_image}
                  style={{
                    backgroundImage: `url('${
                      session.user.avatar.url && session.user.avatar.url
                    }')`,
                  }}
                ></span>
                {name.split(' ')[name.split(' ').length - 1]}
              </li>
            </a>
          </Link>
        ) : (
          role === USER && (
            <Link href={`/wishlist`}>
              <a className={styles.link}>
                <li className={`${styles.list} ${styles.user}`} id='/wishlist'>
                  <span
                    className={styles.profile_image}
                    style={{
                      backgroundImage: `url('${
                        session &&
                        session.user.avatar.url &&
                        session.user.avatar.url
                      }')`,
                    }}
                  ></span>
                  {name.split(' ')[name.split(' ').length - 1]}
                </li>
              </a>
            </Link>
          )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
