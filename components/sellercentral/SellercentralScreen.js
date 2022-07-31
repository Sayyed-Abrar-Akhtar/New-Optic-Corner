import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import {
  ADMIN,
  ADMIN_DASHBOARD,
  PRODUCT_INDEX_PAGE,
  PRODUCT_ADD_PAGE,
  PRODUCT_PUT_DEL_PAGE,
  ORDER_INDEX_PAGE,
  ORDER_PUT_DEL_PAGE,
  STAFF_INDEX_PAGE,
  STAFF_ADD_PAGE,
  STAFF_PUT_DEL_PAGE,
  CUSTOMIZE_PAGE,
  TAGS_PAGE,
  STAFF,
  STAFF_DASHBOARD,
} from '../../constant/GlobalConstants';
import menus from '../../data/sidebarMenu';
import SellercentralControl from '../../utils/sellercentralControl';
import AdminLayout from './admin/AdminLayout';
import StaffLayout from './staff/StaffLayout';
import ProductListing from './product/ProductListing';
import NewProduct from './product/NewProduct';
import AddUpdateDeleteProduct from './product/AddUpdateDeleteProduct';

const SellercentralScreen = ({ screenType, page }) => {
  console.log(screenType, page);

  const router = useRouter();
  const { username: paramUsername } = router.query;

  const { data: session, status } = useSession();

  const sellercentralControl = new SellercentralControl(
    paramUsername,
    session,
    status,
    menus,
    screenType
  );

  const [authorized, menuArr] = sellercentralControl.authorizedPageAccess();

  const baseUrl = sellercentralControl.getBaseUrl();

  // @acess ADMIN
  // @desc ADMIN DASHBOARD PAGE
  if (screenType === ADMIN && page === ADMIN_DASHBOARD) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ADMIN DASHBOARD PAGE
      </AdminLayout>
    );
  }

  // @acess STAFF
  // @desc STAFF DASHBOARD PAGE
  if (screenType === STAFF && page === STAFF_DASHBOARD) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <ProductListing baseUrl={baseUrl} />
      </StaffLayout>
    );
  }

  // @acess ADMIN
  // @desc PRODUCTS LIST PAGE
  if (screenType === ADMIN && page === PRODUCT_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <ProductListing baseUrl={baseUrl} />
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc NEW PRODUCT PAGE
  if (screenType === ADMIN && page === PRODUCT_ADD_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <NewProduct baseUrl={baseUrl} />
      </AdminLayout>
    );
  }

  // @acess STAFF
  // @desc NEW PRODUCT PAGE
  if (screenType === STAFF && page === PRODUCT_ADD_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <NewProduct baseUrl={baseUrl} />
      </StaffLayout>
    );
  }

  // @acess ADMIN
  // @desc PRODUCT EDIT AND DELETE PAGE
  if (screenType === ADMIN && page === PRODUCT_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <AddUpdateDeleteProduct baseUrl={baseUrl} />
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc ORDERS LIST PAGE
  if (screenType === ADMIN && page === ORDER_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS LIST PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc ORDER UPDATE DELETE PAGE
  if (screenType === ADMIN && page === ORDER_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS UPDATE DELETE PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc CUSTOMIZE PAGE
  if (screenType === ADMIN && page === CUSTOMIZE_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        CUSTOMIZE PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc TAGS PAGE
  if (screenType === ADMIN && page === TAGS_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        TAGS PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc STAFFS LIST PAGE
  if (screenType === ADMIN && page === STAFF_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        STAFFS LIST PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc NEW STAFF PAGE
  if (screenType === ADMIN && page === STAFF_ADD_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        NEW STAFF PAGE
      </AdminLayout>
    );
  }

  // @acess ADMIN
  // @desc STAFF EDIT AND DELETE PAGE
  if (screenType === ADMIN && page === STAFF_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        STAFF EDIT AND DELETE PAGE
      </AdminLayout>
    );
  }

  // @acess STAFF
  // @desc PRODUCTS LIST PAGE
  if (screenType === STAFF && page === PRODUCT_INDEX_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <ProductListing baseUrl={baseUrl} />
      </StaffLayout>
    );
  }

  // @acess STAFF
  // @desc PRODUCT EDIT AND DELETE PAGE
  if (screenType === STAFF && page === PRODUCT_PUT_DEL_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <AddUpdateDeleteProduct baseUrl={baseUrl} />
      </StaffLayout>
    );
  }

  // @acess STAFF
  // @desc ORDERS LIST PAGE
  if (screenType === STAFF && page === ORDER_INDEX_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS LIST PAGE
      </StaffLayout>
    );
  }

  // @acess STAFF
  // @desc ORDER UPDATE DELETE PAGE
  if (screenType === STAFF && page === ORDER_PUT_DEL_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS UPDATE DELETE PAGE
      </StaffLayout>
    );
  }

  // @acess STAFF
  // @desc CUSTOMIZE PAGE
  if (screenType === STAFF && page === CUSTOMIZE_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        CUSTOMIZE PAGE
      </StaffLayout>
    );
  }

  // @acess STAFF
  // @desc TAGS PAGE
  if (screenType === STAFF && page === TAGS_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        TAGS PAGE
      </StaffLayout>
    );
  }

  return <p>SellercentralScreen</p>;
};

export default SellercentralScreen;
