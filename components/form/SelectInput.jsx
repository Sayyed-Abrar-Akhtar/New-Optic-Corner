import React, { useEffect, useState } from 'react';

const SelectInput = ({
  name = 'category',
  ID = 'id-category',
  label = 'Choose an option',
  setValue,
  children,
}) => {
  return (
    <div className='w-[90%] my-[0.5rem] mx-[5%] py-[0.5rem]'>
      <select
        name={name}
        id={ID}
        className='border-2 border-[#018c79] w-full rounded h-[4.5rem] p-4'
        onChange={(e) => setValue(e.target.value)}
      >
        <option value=''>{label}</option>
        {/* {options.map((option) => (
          <option
            key={`option-${new Date().getTime() * 14641}`}
            value={option[Object.keys(option)[0]]}
          >
            {Object.keys(option)[0]}
          </option>
        ))} */}
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
