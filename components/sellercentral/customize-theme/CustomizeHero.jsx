import React, { useState } from 'react';
import InputField from '../../form/InputField';
import CustomizeLayout from './CustomizeLayout';

const CustomizeHero = () => {
  const [title, setTitle] = useState('');
  return (
    <CustomizeLayout heading='Hero Image'>
      <InputField
        type='text'
        label='Title'
        id='title'
        value={title}
        setValue={setTitle}
        sellercentral={false}
      />
    </CustomizeLayout>
  );
};

export default CustomizeHero;
