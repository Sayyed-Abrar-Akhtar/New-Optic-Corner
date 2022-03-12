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

  // ADMIN DASHBOARD PAGE
  if (screenType === ADMIN && page === ADMIN_DASHBOARD) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ADMIN DASHBOARD PAGE
      </AdminLayout>
    );
  }

  // PRODUCTS LIST PAGE
  if (screenType === ADMIN && page === PRODUCT_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <ProductListing baseUrl={baseUrl} />
      </AdminLayout>
    );
  }

  // NEW PRODUCT PAGE
  if (screenType === ADMIN && page === PRODUCT_ADD_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        NEW PRODUCT PAGE
      </AdminLayout>
    );
  }

  // PRODUCT EDIT AND DELETE PAGE
  if (screenType === ADMIN && page === PRODUCT_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        PRODUCT EDIT AND DELETE PAGE
      </AdminLayout>
    );
  }

  // ORDERS LIST PAGE
  if (screenType === ADMIN && page === ORDER_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS LIST PAGE
      </AdminLayout>
    );
  }

  // ORDER UPDATE DELETE PAGE
  if (screenType === ADMIN && page === ORDER_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS UPDATE DELETE PAGE
      </AdminLayout>
    );
  }

  // CUSTOMIZE PAGE
  if (screenType === ADMIN && page === CUSTOMIZE_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        CUSTOMIZE PAGE
      </AdminLayout>
    );
  }

  // TAGS PAGE
  if (screenType === ADMIN && page === TAGS_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        TAGS PAGE
      </AdminLayout>
    );
  }

  // STAFFS LIST PAGE
  if (screenType === ADMIN && page === STAFF_INDEX_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        STAFFS LIST PAGE
      </AdminLayout>
    );
  }

  // NEW STAFF PAGE
  if (screenType === ADMIN && page === STAFF_ADD_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        NEW STAFF PAGE
      </AdminLayout>
    );
  }

  // STAFF EDIT AND DELETE PAGE
  if (screenType === ADMIN && page === STAFF_PUT_DEL_PAGE) {
    return (
      <AdminLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        STAFF EDIT AND DELETE PAGE
      </AdminLayout>
    );
  }

  // STAFF DASHBOARD PAGE
  if (screenType === STAFF && page === STAFF_DASHBOARD) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ADMIN DASHBOARD PAGE
      </StaffLayout>
    );
  }

  // PRODUCTS LIST PAGE
  if (screenType === STAFF && page === PRODUCT_INDEX_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        <ProductListing baseUrl={baseUrl} />
      </StaffLayout>
    );
  }

  // NEW PRODUCT PAGE
  if (screenType === STAFF && page === PRODUCT_ADD_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        NEW PRODUCT PAGE
      </StaffLayout>
    );
  }

  // PRODUCT EDIT AND DELETE PAGE
  if (screenType === STAFF && page === PRODUCT_PUT_DEL_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        PRODUCT EDIT AND DELETE PAGE
      </StaffLayout>
    );
  }

  // ORDERS LIST PAGE
  if (screenType === STAFF && page === ORDER_INDEX_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS LIST PAGE
      </StaffLayout>
    );
  }

  // ORDER UPDATE DELETE PAGE
  if (screenType === STAFF && page === ORDER_PUT_DEL_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        ORDERS UPDATE DELETE PAGE
      </StaffLayout>
    );
  }

  // CUSTOMIZE PAGE
  if (screenType === STAFF && page === CUSTOMIZE_PAGE) {
    return (
      <StaffLayout baseUrl={baseUrl} authorized={authorized} menuArr={menuArr}>
        CUSTOMIZE PAGE
      </StaffLayout>
    );
  }

  // TAGS PAGE
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
