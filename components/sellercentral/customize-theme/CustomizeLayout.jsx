import React from 'react';

const CustomizeLayout = ({ heading, children }) => {
  return (
    <div className='rounded shadow-md w-full m-8 p-8'>
      <p className='font-semibold text-lg'>{heading}</p>
      {children}
    </div>
  );
};

export default CustomizeLayout;
