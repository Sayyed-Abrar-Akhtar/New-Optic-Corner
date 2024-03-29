import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  FILTER_CATEGORY,
  FILTER_SEARCH,
  FILTER_SORT,
  FILTER_TAG,
  INPUT_TYPE_CHECKBOX,
} from '../../../constant/GlobalConstants';

import Filter from '../filter/Filter';
import ProductsList from './ProductsList';
import SelectedFilter from '../filter/SelectedFilter';
import Pagination from '../../pagination/Pagination';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/Spinner';

import styles from '../../../styles/ProductListing.module.css';

const ProductListing = ({ baseUrl = '/product' }) => {
  const categoryData = [
    { text: 'category', value: '' },
    { text: 'men', value: 'men' },
    { text: 'women', value: 'women' },
    { text: 'kid', value: 'kid' },
    { text: 'unisex', value: 'unisex' },
  ];

  const tagData = [
    { text: 'tag', value: '' },
    { text: 'Sunglasses', value: 'Sunglasses' },
    { text: 'Powerglasses', value: 'Powerglasses' },
    { text: 'contact lens', value: 'contact lens' },
    { text: 'diwali offers', value: 'diwali offers' },
    { text: 'summer wear', value: 'summer wear' },
    { text: 'square', value: 'square' },
    { text: 'cat eye', value: 'cat eye' },
  ];

  const sortOptions = [
    { text: 'sort', value: '' },
    { text: 'Ascending', value: 'Ascending' },
    { text: 'descending', value: 'descending' },
    { text: 'newest', value: 'newest' },
    { text: 'oldest', value: 'oldest' },
  ];

  const [search, setSearch] = useState('');
  const [filter_tag, setTag] = useState(FILTER_TAG);
  const [filter_category, setCategory] = useState(FILTER_CATEGORY);
  const [filter_sort, setSortOption] = useState(FILTER_SORT);
  const [filterSelected, setFilterSelected] = useState([]);
  const [arrLoading, setArrLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    !arrLoading && setShow(true);
  }, [arrLoading, show, filteredProducts]);

  const {
    loading,
    error,
    products: { data },
  } = useSelector((state) => state.allProducts);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Filter
          placeholder='Filter products'
          val={search}
          setVal={setSearch}
          type='text'
          filterType={FILTER_SEARCH}
          filterArr={filterSelected}
          setFilterArr={setFilterSelected}
          loading={arrLoading}
          setLoading={setArrLoading}
        />
        <div className={styles.filter}>
          <Filter
            type={INPUT_TYPE_CHECKBOX}
            setVal={setTag}
            arr={tagData}
            filterType={filter_tag}
            filterArr={filterSelected}
            setFilterArr={setFilterSelected}
            loading={arrLoading}
            setLoading={setArrLoading}
          />
          <Filter
            type={INPUT_TYPE_CHECKBOX}
            setVal={setCategory}
            arr={categoryData}
            filterType={filter_category}
            filterArr={filterSelected}
            setFilterArr={setFilterSelected}
            loading={arrLoading}
            setLoading={setArrLoading}
          />
        </div>
        <div className={styles.sort__products}>
          <Filter
            type={INPUT_TYPE_CHECKBOX}
            setVal={setSortOption}
            arr={sortOptions}
            filterType={filter_sort}
            filterArr={filterSelected}
            setFilterArr={setFilterSelected}
            loading={arrLoading}
            setLoading={setArrLoading}
          />
        </div>
        <div className={styles.add__products}>
          <Link href={`${baseUrl}/products/new`}>
            <a href='' className=''>
              <FaPlus /> New Product
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.selected_filter}>
        <SelectedFilter filterArr={filterSelected} />
      </div>
      <div className={`${styles.hr} hr`}></div>
      <ProductsList products={filteredProducts} baseUrl={baseUrl} />
      {loading ? (
        <Spinner />
      ) : (
        !error && (
          <Pagination
            itemsPerPage={10}
            items={data}
            setFilteredItems={setFilteredProducts}
          />
        )
      )}
    </div>
  );
};

export default ProductListing;
