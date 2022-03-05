import axios from 'axios';
import React, { useState } from 'react';

import Link from 'next/link';
import InputField from '../form/InputField';
import { BsSquare } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { RiAccountPinCircleFill } from 'react-icons/ri';

import styles from '../../styles/Form.module.css';
import Account from './Account';
import DragAndDropFile from '../form/DragAndDropFile';

const SignupForm = () => {
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

    console.log(image);

    axios
      .post(`http://localhost:3000/api/auth/register`, data)
      .then((res) => console.log(res));
  };

  const signupBannerImage = `https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses_158538-5002.jpg?w=740`;
  return (
    <Account
      pageHeading='Sign Up'
      bannerImage={signupBannerImage}
      captionTitle='Create an account'
      captionSubtitle={`By creating an account you will be able to add your desired eye wear into the cart and proceed to the order. Also by creating an account you will be able to add products into wishlist to buy later`}
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
          {termsAndCondtionAccepted ? (
            <input type='checkbox' id='termsandconditions' checked />
          ) : (
            <input type='checkbox' id='termsandconditions' />
          )}
          <input type='checkbox' id='termsandconditions' />
          <label
            htmlFor='termsandconditions'
            onClick={(e) =>
              setTermsAndConditionAccepted(!termsAndCondtionAccepted)
            }
          >
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
        <button type='submit' className={`cta ${styles.btn__submit}`}>
          Signup
        </button>
      </form>
      {console.log(image)}
    </Account>
  );
};

export default SignupForm;
