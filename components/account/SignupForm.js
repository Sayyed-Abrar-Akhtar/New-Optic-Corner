import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import InputField from '../form/InputField';
import { BsSquare } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { RiAccountPinCircleFill } from 'react-icons/ri';

import styles from '../../styles/Form.module.css';
import DragAndDropFile from '../form/DragAndDropFile';
import Account from './Account';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
  authRegister,
  clearErrors,
  resetUserData,
} from '../../redux/actions/userActions';
import { FormValidator } from '../../utils/FormValidator';

const SignupForm = () => {
  const {
    theme: { signup },
  } = useSelector((state) => state.getTheme);

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.authRegister);

  const router = useRouter();

  const [termsAndCondtionAccepted, setTermsAndConditionAccepted] =
    useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const data = {
    name,
    email,
    password,
    avatar: image,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validator = new FormValidator(
      name,
      email,
      password,
      confirmPassword,
      image,
      termsAndCondtionAccepted
    );
    if (validator.validate()) {
      dispatch(authRegister(data));
    } else {
      validator.message.forEach((item) => toast.error(item));
    }
  };

  useEffect(() => {
    if (user) {
      user.success ? toast.success(user.message) : toast.error(user.message);
      router.push('/account');
      dispatch(resetUserData());
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, user, router]);

  return (
    <Account
      pageHeading='Sign Up'
      bannerImage={signup.bannerImage.url}
      captionTitle={signup.heading}
      captionSubtitle={signup.subheading}
    >
      <form className={styles.form} onSubmit={submitHandler}>
        <RiAccountPinCircleFill className={styles.header_icon} />
        <InputField
          text='Name'
          type='text'
          label='Name'
          id='name'
          setValue={setName}
          value={name}
        />
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
        <InputField
          text='confirm password'
          type='password'
          label='Confirm password'
          id='confirm-password'
          setValue={setConfirmPassword}
          value={confirmPassword}
        />
        <div className={styles.select_file}>
          <DragAndDropFile image={image} setImage={setImage} />
        </div>
        <div className={styles.checkbox_container}>
          <input
            type='checkbox'
            id='termsandconditions'
            onChange={(e) => setTermsAndConditionAccepted(e.target.checked)}
          />

          <label htmlFor='termsandconditions'>
            {termsAndCondtionAccepted ? (
              <TiTick className={styles.icon} />
            ) : (
              <BsSquare className={styles.icon} />
            )}
            <span>
              By signing up I agree with{' '}
              <Link href='/terms-and-conditions'>terms and conditions.</Link>
            </span>
          </label>
        </div>

        {loading ? (
          <button
            type='submit'
            className={`cta ${styles.btn__submit}`}
            disabled
          >
            Registering...
          </button>
        ) : (
          <button type='submit' className={`cta ${styles.btn__submit}`}>
            Signup
          </button>
        )}
      </form>
    </Account>
  );
};

export default SignupForm;
