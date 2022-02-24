import React, { useState } from 'react';
import Account from './Account';

import styles from '../../styles/Form.module.css';
import InputField from '../form/InputField';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const bannerImage =
    'https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7867.jpg?w=826';

  return (
    <Account
      pageHeading='Forgot Password'
      captionTitle='Retrieve password'
      captionSubtitle='Please enter your email address in the email field to search for your account and retrieve your password.'
      bannerImage={bannerImage}
    >
      <form className={styles.form}>
        <InputField
          text='email'
          type='email'
          label='email'
          id='email'
          setValue={setEmail}
          value={email}
        />
        <button type='submit' className={`cta ${styles.btn__submit}`}>
          Retrieve Password
        </button>
      </form>
    </Account>
  );
};

export default ForgotPasswordForm;
