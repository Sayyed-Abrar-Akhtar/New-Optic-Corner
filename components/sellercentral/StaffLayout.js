import React from 'react';

import { useSession } from 'next-auth/react';

import Layout from '../../components/sellercentral/Layout';
import {
  AUTHENTICATED,
  LOADING,
  STAFF,
  UNAUTHENTICATED,
} from '../../constant/GlobalConstants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffContent from '../../components/sellercentral/StaffContent';

import menus from '../../data/sidebarMenu';

const StaffLayout = ({ children }) => {
  const router = useRouter();
  const { username: paramUsername } = router.query;

  const { data: session, status } = useSession();

  switch (status) {
    case LOADING:
      return <p>LOADING...</p>;
    case UNAUTHENTICATED:
      return (
        <p>
          NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
        </p>
      );
    case AUTHENTICATED:
      if (session !== undefined && paramUsername !== session.user.username) {
        return (
          <p>
            NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
          </p>
        );
      }
      if (session !== undefined && session.user.role === STAFF) {
        return (
          <Layout>
            <StaffContent
              homeLink={`/sellercentral/${status}/staff/${session.user.username}`}
              menus={menus}
            >
              {children}
            </StaffContent>
          </Layout>
        );
      }
    default:
      return (
        <p>
          Error <Link href={'/account'}>Go back...</Link>
        </p>
      );
  }
};

export default StaffLayout;
