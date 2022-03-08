import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CategoryBanner from './home/CategoryBanner';
import FrameGrid from './home/FrameGrid';
import HeroBanner from './home/HeroBanner';
import Prescription from './home/Prescription';
import Promotion from './home/Promotion';
import ProductGrid from './product/ProductGrid';

const Home = () => {
  const { error } = useSelector((state) => state.allProducts);
  const {
    error: themeError,
    loading: themeLoading,
    theme,
  } = useSelector((state) => state.getTheme);

  console.log('theme => ', theme);
  console.log('theme => ', theme.herobanner);
  return (
    <>
      {!themeLoading && !themeError && <HeroBanner hero={theme.herobanner} />}
      <ProductGrid title={theme.featured_product_heading} />
      {!themeLoading && !themeError && (
        <>
          <Promotion offer={theme.promotions} />
          <Prescription prescription={theme.prescription} />
          <FrameGrid frames={theme.frames} />
          <CategoryBanner
            heading={theme.categorybanner.heading}
            categories={theme.categorybanner.categories}
          />
        </>
      )}
    </>
  );
};

export default Home;
