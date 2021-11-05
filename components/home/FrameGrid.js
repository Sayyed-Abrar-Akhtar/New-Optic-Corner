import React from 'react';
import Image from 'next/image';

import styles from '../../styles/FrameGrid.module.css';

const FrameGrid = () => {
  return (
    <section className={styles.frame}>
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gcae3b527e_1920_m2t6wk.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
          />
        </section>
        <h4 className={styles.title}>Rectangle</h4>
      </section>
      {/* will go on loop */}
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635768692/glasses-g76147125b_1920_kjqksa.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
          />
        </section>
        <h4 className={styles.title}>Rectangle</h4>
      </section>
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635768692/glasses-g77ea1af77_1920_smgfb1.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
          />
        </section>
        <h4 className={styles.title}>Rectangle</h4>
      </section>
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635768692/glasses-gecb4a4b9e_1920_afxi7g.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
          />
        </section>
        <h4 className={styles.title}>Rectangle</h4>
      </section>
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635768692/spectacles-gbee2e6f9d_1280_fjsjrl.png'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
          />
        </section>
        <h4 className={styles.title}>Oval</h4>
      </section>
      <section className={styles.details}>
        <section className={styles.image__container}>
          <Image
            className={styles.image}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src='https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gc75c8d6e4_1920_flgt6w.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
            alt={'title' || 'Power Glasses Frame'}
          />
        </section>
        <h4 className={styles.title}>Cat Eye</h4>
      </section>
      {/*  end */}
    </section>
  );
};

export default FrameGrid;
