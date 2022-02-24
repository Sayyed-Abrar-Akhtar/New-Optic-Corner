import React from 'react';
import ForgotPasswordForm from '../../../components/account/ForgotPasswordForm';
import Layout from '../../../components/layout/Layout';

const forgot = () => {
  return (
    <Layout
      title='Forgot password | New Optic Corner'
      description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
      ogUrl='https://www.newopticcorner.com.np/account/password/forgot'
    >
      <ForgotPasswordForm />
    </Layout>
  );
};

export default forgot;
