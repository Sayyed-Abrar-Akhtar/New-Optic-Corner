import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Home = () => {
  const { error } = useSelector((state) => state.allProducts);

  useEffect(() => {
    toast.error(error);
  }, []);

  return (
    <>
      <span>products</span>
    </>
  );
};

export default Home;
