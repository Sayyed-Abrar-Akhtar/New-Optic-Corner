import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Prescription.module.css';
import Btn from '../Btn';

const Prescription = ({ prescription = {} }) => {
  return (
    <section className={styles.prescription}>
      <h2 className='heading'>{prescription.heading}</h2>
      <section className={styles.info}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src={prescription.image.url}
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
            alt={'title' || 'How to order prescription glasses?'}
          />
        </section>
        <section className={styles.detail__container}>
          <h3 className={styles.title}>{prescription.title}</h3>
          <p className={styles.details}>{prescription.details} </p>
          <Btn to={prescription.cta.link} text={prescription.cta.text} />
        </section>
      </section>
    </section>
  );
};

export default Prescription;
