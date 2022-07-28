import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PRODUCT_TAG_TRENDING, TRENDING } from '../constant/GlobalConstants';
import { getTrendingProducts } from '../redux/actions/productActions';
import { wrapper } from '../redux/store';
import CategoryBanner from './home/CategoryBanner';
import FrameGrid from './home/FrameGrid';
import HeroBanner from './home/HeroBanner';
import Prescription from './home/Prescription';
import Promotion from './home/Promotion';
import ProductGrid from './product/ProductGrid';

const Home = () => {
  const {
    error: themeError,
    loading: themeLoading,
    theme,
  } = useSelector((state) => state.getTheme);

  const {
    products: { data },
  } = useSelector((state) => state.trendingProducts);
  console.log(data);

  // const trendingProducts = data
  //   .filter((item) =>
  //     item.tags ? item.tags.includes(PRODUCT_TAG_TRENDING) : []
  //   )
  //   .filter((item, idx) => idx < 4);

  return (
    <>
      {!themeLoading && !themeError && <HeroBanner hero={theme.herobanner} />}
      <ProductGrid title={theme.featured_product_heading} products={data} />
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
