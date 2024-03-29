import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { menus } from '../../utils/menuData';
import {
  ADMIN,
  AUTHENTICATED,
  LOADING,
  STAFF,
  UNAUTHENTICATED,
  USER,
} from '../../constant/GlobalConstants';

import styles from '../../styles/Nav.module.css';

const nameFormat = (name) => {
  return name.split(' ').length > 1 ? name.split(' ')[0] : name;
};

const MenuList = ({ mobile = false, mobileStyles, checked, setChecked }) => {
  const { data: session, status } = useSession();

  let role = '';
  let name = '';

  if (status === AUTHENTICATED) {
    role = session.user.role;
    name = session.user.name;
  }

  const { cartItems } = useSelector((state) => state.newCartItem);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    setItemsInCart(cartItems.length);
  }, [cartItems]);

  return (
    <ul className={mobile ? mobileStyles : styles.lists}>
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
          <li
            className={`${styles.list} relative flex items-end justify-center`}
            id='cart'
          >
            <span>Cart</span>
            {itemsInCart > 0 && (
              <span
                className={`absolute top-[-45%] right-[-40%] ml-1 text-lg bg-[#f5f5f5] z-[-1] rounded-full w-[2.25rem] h-[2.25rem] flex items-center justify-center font-bold text-[#00574b] ${styles.cart_item}`}
              >
                {itemsInCart}
              </span>
            )}
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
        <Link href={`sellercentral/${status}/${role}/${session.user.username}`}>
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
              {nameFormat(name)}
            </li>
          </a>
        </Link>
      ) : role === STAFF ? (
        <Link href={`sellercentral/${status}/${role}/${session.user.username}`}>
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
              {nameFormat(name)}
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
                {nameFormat(name)}
              </li>
            </a>
          </Link>
        )
      )}
    </ul>
  );
};

export default MenuList;
