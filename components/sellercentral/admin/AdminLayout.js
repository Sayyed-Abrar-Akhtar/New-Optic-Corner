import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ADMIN, LOADING } from '../../../constant/GlobalConstants';

import menus from '../../../data/sidebarMenu';
import SellercentralControl from '../../../utils/sellercentralControl';
import Spinner from '../../spinner/Spinner';
import Layout from '../layout/Layout';
import AdminContent from './AdminContent';

const AdminLayout = ({ children, baseUrl, authorized, menuArr }) => {
  // const router = useRouter();
  // const { username: paramUsername } = router.query;

  // const { data: session, status } = useSession();

  // const sellercentralControl = new SellercentralControl(
  //   paramUsername,
  //   session,
  //   status,
  //   menus,
  //   ADMIN
  // );

  //const [authorized, menuArr] = sellercentralControl.authorizedPageAccess();

  //const baseUrl = sellercentralControl.getBaseUrl();

  if (authorized && menuArr.length > 0) {
    return (
      <Layout>
        <AdminContent baseUrl={baseUrl} menus={menuArr}>
          {children}
        </AdminContent>
      </Layout>
    );
  }
  return (
    <p>
      {menuArr[0] && menuArr[0].type === LOADING ? (
        <Spinner />
      ) : (
        <>
          {'Not Authorised!'}
          <Link href='/account'>
            <a>Go back</a>
          </Link>
        </>
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

  //     if (session !== undefined && session.user.role === ADMIN) {
  //       const additionalField = [
  //         {
  //           name: 'staffs',
  //           id: 'staffs',
  //           link: '/staffs',
  //           type: `${STAFFS}`,
  //         },
  //       ];

  //       let updatedMenus = menus;
  //       updatedMenus = updatedMenus.concat(additionalField);

  //       return (
  //         <Layout>
  //           <AdminContent
  //             homeLink={`/sellercentral/${status}/admin/${session.user.username}`}
  //             menus={updatedMenus}
  //           >
  //             {children}
  //           </AdminContent>
  //         </Layout>
  //       );
  //     }
  //   default:
  //     return (
  //       <p>
  //         NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
  //       </p>
  //     );
  // }
};

export default AdminLayout;
