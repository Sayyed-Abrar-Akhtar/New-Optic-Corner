import React from 'react';

import { ImSpinner9 } from 'react-icons/im';

const Spinner = ({ width = '3rem', height = '3rem' }) => {
  return (
    <span className={`w-[${width}] h-[${height}] block`}>
      <ImSpinner9 className='w-full h-full animate-spin text-[#00574b]' />
    </span>
  );
};

export default Spinner;
