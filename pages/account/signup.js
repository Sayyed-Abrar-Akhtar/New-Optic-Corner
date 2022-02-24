import React from 'react';
import SignupForm from '../../components/account/SignupForm';
import Layout from '../../components/layout/Layout';

const signup = () => {
  return (
    <Layout
      title='Sign up | New Optic Corner'
      description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
      ogUrl='https://www.newopticcorner.com.np/account/signup'
    >
      <SignupForm />
    </Layout>
  );
};

export default signup;
