import React from 'react';
import Link from 'next/link';

const Btn = ({ to = '/', text = 'shop now', extraClass = 'cta' }) => {
  return (
    <Link href={to}>
      <a className={`cta ${extraClass}`}>{text}</a>
    </Link>
  );
};

export default Btn;
