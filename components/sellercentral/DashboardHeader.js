import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/DashboardHeader.module.css';
import { signOut, useSession } from 'next-auth/react';
import {
  AUTHENTICATED,
  GREETING,
  SALUTATION,
} from '../../constant/GlobalConstants';
import { useRouter } from 'next/router';

const DashboardHeader = ({ homeLink = '/sellercentral' }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showUserMenu, setShowUserMenu] = useState(false);

  const logoutHandler = (e) => {
    e.preventDefault();
    signOut();
    router.push('/');
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo__box}>
        <Link href={homeLink} passHref>
          <a>
            <Image
              src='/logo.svg'
              alt='New Optic Corner'
              width={600}
              height={400}
            />
          </a>
        </Link>
      </div>
      <div className={styles.greeting_box}>
        <p>
          <b className={styles.name}>
            {session !== undefined && session.user && session.user.name}
          </b>
          <span className={styles.greeting}>{GREETING}</span>
          <span className={styles.salutation}>{SALUTATION}</span>
        </p>
      </div>
      <div className={styles.event_box}>
        {status === AUTHENTICATED && session !== undefined && (
          <div
            className={styles.user}
            onClick={(e) => setShowUserMenu(!showUserMenu)}
          >
            <div
              className={styles.user__img}
              style={{ backgroundImage: `url('${session.user.avatar.url}')` }}
            ></div>
            <span>{!showUserMenu ? <FaChevronDown /> : <FaChevronUp />}</span>
          </div>
        )}

        <div
          className={`${styles.dropdown__container} ${
            !showUserMenu && styles.hidden
          }`}
        >
          <li className={styles.item} onClick={(e) => logoutHandler(e)}>
            Logout
          </li>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
