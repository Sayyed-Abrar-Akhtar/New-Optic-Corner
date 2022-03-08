import AsyncHandler from './AsyncHandler';
import ErrorHandler from '../utils/errorHandler';
import { getSession } from 'next-auth/react';

const isAuthenticatedUser = AsyncHandler(async (req, res, next) => {
  const session = await getSession({ req });

  console.log(session);

  if (!session) {
    return next(new ErrorHandler('Authorised Login is required!', 401));
  }

  req.user = session.user;
  next();
});

export { isAuthenticatedUser };
