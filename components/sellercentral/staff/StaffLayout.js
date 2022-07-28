import React from 'react';

import { useSession } from 'next-auth/react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../../components/sellercentral/layout/Layout';
import StaffContent from '../../../components/sellercentral/staff/StaffContent';

import { LOADING, STAFF } from '../../../constant/GlobalConstants';

import menus from '../../../data/sidebarMenu';
import SellercentralControl from '../../../utils/sellercentralControl';
import Spinner from '../../spinner/Spinner';

const StaffLayout = ({ children, baseUrl, authorized, menuArr }) => {
  const router = useRouter();
  const { username: paramUsername } = router.query;

  const { data: session, status } = useSession();

  const sellercentralControl = new SellercentralControl(
    paramUsername,
    session,
    status,
    menus,
    STAFF
  );

  //const [authorized, menuArr] = sellercentralControl.authorizedPageAccess();

  //const baseUrl = sellercentralControl.getBaseUrl();

  if (authorized && menuArr.length > 0) {
    return (
      <Layout>
        <StaffContent baseUrl={baseUrl} menus={menuArr}>
          {children}
        </StaffContent>
      </Layout>
    );
  }
  return (
    <p>
      {menuArr[0] && menuArr[0].type === LOADING ? (
        <span className='w-[100vw] h-[100vh] flex items-center justify-center'>
          <Spinner />
        </span>
      ) : (
        <span className='w-[100vw] h-[100vh] flex items-center justify-center'>
          {'Not Authorised!'}
          <Link href='/account'>
            <a>Go back</a>
          </Link>
        </span>
      )}
    </p>
  );
  // switch (status) {
  //   case LOADING:
  //     return <p>LOADING...</p>;
  //   case UNAUTHENTICATED:
  //     return (
  //       <p>
  //         NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
  //       </p>
  //     );
  //   case AUTHENTICATED:
  //     if (session !== undefined && paramUsername !== session.user.username) {
  //       return (
  //         <p>
  //           NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
  //         </p>
  //       );
  //     }
  //     if (session !== undefined && session.user.role === STAFF) {
  //       return (
  //         <Layout>
  //           <StaffContent
  //             homeLink={`/sellercentral/${status}/staff/${session.user.username}`}
  //             menus={menus}
  //           >
  //             {children}
  //           </StaffContent>
  //         </Layout>
  //       );
  //     }
  //   default:
  //     return (
  //       <p>
  //         Error <Link href={'/account'}>Go back...</Link>
  //       </p>
  //     );
  // }
};

export default StaffLayout;
