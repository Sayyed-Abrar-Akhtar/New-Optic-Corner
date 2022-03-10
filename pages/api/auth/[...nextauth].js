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
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error('Invalid email or password');
        }

        const userData = {
          avatar: user.avatar,
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          __v: user.__v,
        };

        return Promise.resolve(userData);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account, isNewUser }) {
      if (account) {
        token.accessToken = account;
        token.user = user;
        token.isNewUser = isNewUser;
      }

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
});
