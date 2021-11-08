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

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <>
      <HeroBanner />
      <ProductGrid title='Latest Product' />
      <Promotion />
      <Prescription />

      <FrameGrid />
      <CategoryBanner />
    </>
  );
};

export default Home;
