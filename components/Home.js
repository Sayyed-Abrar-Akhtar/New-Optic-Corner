import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CategoryBanner from './home/CategoryBanner';
import HeroBanner from './home/HeroBanner';
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
      <CategoryBanner />
    </>
  );
};

export default Home;
