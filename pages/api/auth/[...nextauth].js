import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../config/dbConnect';
import User from '../../../models/user';

export default NextAuth({
  session: {
    jw: true,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        // CHECK EMAIL AND PASSWORD IS PROVIDED
        if (!email || !password) {
          throw new Error('Email or password must be provided!');
        }

        // FIND USER IN DATABASE
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
          throw new Error('Invalid email or password');
        }

        // CHECK IF PASSWORD MATCHED
        const isPasswordMatched = await User.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error('Invalid email or password');
        }
        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
