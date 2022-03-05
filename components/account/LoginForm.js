import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { SiWebauthn } from 'react-icons/si';

import InputField from '../form/InputField';

import styles from '../../styles/Form.module.css';
import Account from './Account';
import Link from 'next/link';

import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginBannerImage =
    'https://img.freepik.com/free-photo/young-smiling-man-red-shirt-with-optical-glasses-points-side-looks-isolated-orange-wall_141793-35497.jpg?w=740';

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
      console.log('Error occured whle login');
      console.error(result.error);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Account
      pageHeading='Login'
      bannerImage={loginBannerImage}
      captionTitle='Login into your account'
      captionSubtitle={`By logging in your account you will be able to add your desired eye wear into the cart and proceed to the order. Also by creating an account you will be able to add products into wishlist to buy later`}
    >
      <form className={styles.form} onSubmit={submitHandler}>
        <SiWebauthn className={styles.header_icon} />
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
          {loading ? 'Logging in...' : 'Login'}
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
