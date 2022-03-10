import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminContent from '../../components/sellercentral/AdminContent';
import Layout from '../../components/sellercentral/Layout';
import {
  ADMIN,
  AUTHENTICATED,
  LOADING,
  UNAUTHENTICATED,
  STAFFS,
} from '../../constant/GlobalConstants';

import menus from '../../data/sidebarMenu';

const AdminLayout = ({ children }) => {
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

      if (session !== undefined && session.user.role === ADMIN) {
        const additionalField = [
          {
            name: 'staffs',
            id: 'staffs',
            link: '/staffs',
            type: `${STAFFS}`,
          },
        ];

        let updatedMenus = menus;
        updatedMenus = updatedMenus.concat(additionalField);

        return (
          <Layout>
            <AdminContent
              homeLink={`/sellercentral/${status}/admin/${session.user.username}`}
              menus={updatedMenus}
            >
              {children}
            </AdminContent>
          </Layout>
        );
      }
    default:
      return (
        <p>
          NOT AUTHETICATED <Link href={'/account'}>Go back...</Link>
        </p>
      );
  }
};

export default AdminLayout;
