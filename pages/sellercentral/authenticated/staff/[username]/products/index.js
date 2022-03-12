import React from 'react';
import ProductListing from '../../../../../../components/sellercentral/product/ProductListing';
import StaffLayout from '../../../../../../components/sellercentral/staff/StaffLayout';

const productsPage = () => {
  return (
    <StaffLayout>
      <ProductListing />
    </StaffLayout>
  );
};

export default productsPage;
