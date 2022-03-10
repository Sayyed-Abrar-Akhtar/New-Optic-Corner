import React from 'react';
import Image from 'next/image';

import styles from '../../styles/FrameGrid.module.css';

const FrameGrid = ({ frames }) => {
  return (
    <section className={styles.frame}>
      {/* will go on loop */}
      {frames.map(
        (frame, idx) =>
          idx <= 7 && (
            <section className={styles.details} key={idx}>
              <section className={styles.image__container}>
                <Image
                  className={styles.image}
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                  src={frame.image.url}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  placeholder='blur'
                  alt={frame.title}
                />
              </section>
              <h4 className={styles.title}>{frame.title}</h4>
            </section>
          )
      )}

      {/*  end */}
    </section>
  );
};

export default FrameGrid;
