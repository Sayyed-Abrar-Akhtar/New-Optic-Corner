import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CategoryBanner from './home/CategoryBanner';
import FrameGrid from './home/FrameGrid';
import HeroBanner from './home/HeroBanner';
import Prescription from './home/Prescription';
import ProductGrid from './product/ProductGrid';

const Home = () => {
  const { error } = useSelector((state) => state.allProducts);

  useEffect(() => {
    toast.error(error);
  }, []);

  return (
    <>
      <HeroBanner />
      <ProductGrid />
      <Prescription />
      <FrameGrid />
      <CategoryBanner />
    </>
  );
};

export default Home;
