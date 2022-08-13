import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { SiWebauthn } from 'react-icons/si';

import InputField from '../form/InputField';

import Account from './Account';
import Link from 'next/link';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  AUTHENTICATED,
  CHECKOUT_REDIRECT,
  ORDER_REDIRECT,
} from '../../constant/GlobalConstants';

import styles from '../../styles/Form.module.css';

const LoginForm = () => {
  const router = useRouter();

  const {
    theme: { login },
  } = useSelector((state) => state.getTheme);

  const { status } = useSession();

  useEffect(() => {
    if (status === AUTHENTICATED) {
      switch (router.query.type) {
        case CHECKOUT_REDIRECT:
          router.push('/checkout');
          break;

        case ORDER_REDIRECT:
          router.push('/orders');
          break;
        default:
          router.push('/');
          break;
      }
      // if (router.query.type === CHECKOUT_REDIRECT) {
      //   router.push('/checkout');
      // } else {
      //   router.push('/');
      // }
    }
  }, [status, router]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
    } else {
      switch (router.query.type) {
        case CHECKOUT_REDIRECT:
          router.push('/checkout');
          break;

        case ORDER_REDIRECT:
          router.push('/orders');
          break;
        default:
          router.push('/');
          break;
      }
      // if (router.query.type === CHECKOUT_REDIRECT) {
      //   router.push('/checkout');
      // } else {
      //   router.push('/');
      // }
    }
  };

  return (
    <Account
      pageHeading='Login'
      bannerImage={login.bannerImage.url}
      captionTitle={login.heading}
      captionSubtitle={login.subheading}
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
