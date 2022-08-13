import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Product.module.css';

const Images = ({
  variant,
  altText,
  discount,
  featuredImage,
  setFeaturedImage,
}) => {
  const changeImage = (e, src) => {
    setFeaturedImage(src);
  };

  return (
    <section
      className={`${styles.images} relative shadow-md rounded overflow-hidden`}
    >
      <section className={styles.image__container}>
        <div className='relative w-full h-[40rem]'>
          <Image
            className={`${styles.image}`}
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
            src={
              featuredImage
                ? featuredImage
                : 'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1635770039/glasses-gc75c8d6e4_1920_flgt6w.jpg'
            }
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            placeholder='blur'
            alt={altText}
          />
        </div>

        {discount ? (
          <span
            className={styles.price__discount__badge}
          >{`-${discount}%`}</span>
        ) : null}
      </section>
      <section className={styles.thumbnail__container}>
        {variant.images[0]
          ? variant.images.map((img) => (
              <div
                key={img._id}
                className='relative w-[7.5rem] h-[7.5rem] my-8 mx-4 rounded'
              >
                <Image
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8vB8AAqsBtBK3h1QAAAAASUVORK5CYII='
                  src={img.secure_url}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  alt={altText}
                  onClick={(e) => changeImage(e, img.secure_url)}
                />
              </div>
            ))
          : 'no-image'}
      </section>
    </section>
  );
};

export default Images;
