import React from 'react';
import Image from 'next/image';

const Temp = () => {
  return (
    <>
      <Image src='/logo.svg' width='200' height='100' />
      <h1>New optic Corner</h1>
      <p>
        Our online services will be live very soon.
        <br />
        with the latest and trendy <br />
        eyewear, lenses, power glasses, sunglasses very soon.
      </p>
      <p>
        Subscribe below to get notified by the offers and great deals earlier.
      </p>
      <form action='https://formspree.io/f/mknkakpa' method='POST'>
        <label htmlFor='email'>Your email:</label>
        <input type='email' name='_replyto' id='email' />

        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default Temp;
