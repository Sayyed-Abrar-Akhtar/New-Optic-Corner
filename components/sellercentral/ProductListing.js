import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  FILTER_CATEGORY,
  FILTER_SEARCH,
  FILTER_SORT,
  FILTER_TAG,
  INPUT_TYPE_CHECKBOX,
} from '../../constant/GlobalConstants';

import styles from '../../styles/ProductListing.module.css';
import Filter from './Filter';
import ProductsList from './ProductsList';
import SelectedFilter from './SelectedFilter';

const ProductListing = () => {
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

  useEffect(() => {
    !arrLoading && setShow(true);
    console.log(show);
  }, [arrLoading, show]);

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
          <Link href='/new'>
            <a href='' className=''>
              <FaPlus /> New Product
            </a>
          </Link>
        </div>
      </div>
      <div>
        <SelectedFilter filterArr={filterSelected} />
      </div>
      <div className='hr'></div>
      <ProductsList />
    </div>
  );
};

export default ProductListing;
