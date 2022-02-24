import React, { useState } from 'react';
import InputField from '../form/InputField';

import styles from '../../styles/Form.module.css';
import Account from './Account';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginBannerImage =
    'https://img.freepik.com/free-photo/young-smiling-man-red-shirt-with-optical-glasses-points-side-looks-isolated-orange-wall_141793-35497.jpg?w=740';

  return (
    <Account
      pageHeading='Login'
      bannerImage={loginBannerImage}
      captionTitle='Login into your account'
      captionSubtitle={`By logging in your account you will be able to add your desired eye wear into the cart and proceed to the order. Also by creating an account you will be able to add products into wishlist to buy later`}
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
        <InputField
          text='password'
          type='password'
          label='password'
          id='password'
          setValue={setPassword}
          value={password}
        />

        <button type='submit' className={`cta ${styles.btn__submit}`}>
          Login
        </button>

        <div className={styles.separator}></div>

        <div className={styles.forgot_password}>
          <Link href='/account/password/forgot'>Forgot password?</Link>
        </div>
        <div className={styles.new_user}>
          <p>Do not have an account?</p>
          <p>
            <b>
              <Link href='/account/signup'>Create one</Link>
            </b>
          </p>
        </div>
      </form>
    </Account>
  );
};

export default LoginForm;
