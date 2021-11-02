import React from 'react';
import Link from 'next/link';
import {
  FaHeart,
  FaFacebookSquare,
  FaMobileAlt,
  FaViber,
  FaWhatsapp,
} from 'react-icons/fa';

import styles from '../../styles/Footer.module.css';
import { menus } from '../../utils/footerData';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.company}>
        <section className={styles.map}>
          <iframe
            className={styles.iframe}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3383345270863!2d85.3097533!3d27.7068382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ff3e0da027%3A0x244919393c4eb8c3!2sNew%20Optic%20Corner!5e0!3m2!1sen!2snp!4v1635832323441!5m2!1sen!2snp'
            loading='lazy'
          ></iframe>
        </section>

        <section className={styles.details}>
          <section className={styles.menu__container}>
            {/* Footer Menu  */}
            {menus.map((menu, index) => (
              <section className={styles.menu} key={index + Date.now()}>
                <h4 className={styles.heading}>{menu.heading}</h4>
                <ul className={styles.lists}>
                  {menu.lists.map((list, index) => (
                    <section
                      className={styles.lists__container}
                      key={index + Date.now()}
                    >
                      {list.link ? (
                        list.icon ? (
                          <Link href={list.link}>
                            <a className={styles.link} key={index + Date.now()}>
                              <li className={styles.list}>
                                <span className={styles.icon}>
                                  {list.icon == 'fb' && (
                                    <FaFacebookSquare className={styles.fb} />
                                  )}
                                </span>{' '}
                                <span>{list.value}</span>
                              </li>
                            </a>
                          </Link>
                        ) : (
                          <Link href={list.link}>
                            <a className={styles.link} key={index + Date.now()}>
                              <li className={styles.list}>{list.name}</li>
                            </a>
                          </Link>
                        )
                      ) : (
                        <li className={styles.list} key={index + Date.now()}>
                          <span className={styles.icon}>
                            {list.icon == 'phone' && <FaMobileAlt />}
                            {list.icon == 'viber' && (
                              <FaViber className={styles.viber} />
                            )}
                            {list.icon == 'whatsapp' && (
                              <FaWhatsapp className={styles.whatsapp} />
                            )}
                          </span>{' '}
                          <span className={styles.list__key}>{list.name}</span>
                          <span>{list.value}</span>
                        </li>
                      )}
                    </section>
                  ))}
                </ul>
              </section>
            ))}
            {/* Footer Menu End */}
          </section>
          <section className={styles.legal}>
            <h3 className={styles.name}>
              New Optic Corner &#10526; Abdullah Muslim (CEO)
            </h3>
            <p className={styles.copyright}>
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
          </section>
        </section>
      </section>

      <section className={styles.dev}>
        <p className={styles.dev__job}>
          Designed and developed with
          <span>
            <FaHeart className={styles.heart} />
          </span>
        </p>
        <h4 className={styles.dev__name}>
          <a
            href='https://www.sayyedabrarakhtar.com.np/'
            className={styles.dev__link}
            target='_blank'
            rel='noreferrer'
          >
            Sayyed Abrar Akhtar (Software Engineer)
          </a>
        </h4>
      </section>
    </footer>
  );
};

export default Footer;
