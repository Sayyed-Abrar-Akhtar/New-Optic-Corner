import React, { useEffect, useState } from 'react';

const Pagination = ({ itemsPerPage, items, setFilteredItems }) => {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(itemsPerPage);

  const [showPreviousBtn, setShowPreviousBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);

  useEffect(() => {
    if (page > 1) {
      setShowPreviousBtn(true);
    } else {
      setShowPreviousBtn(false);
    }
    if (items.length > end) {
      setShowNextBtn(true);
    } else {
      setShowNextBtn(false);
    }
    if (items.length > itemsPerPage) {
      const filterItems = items.slice(start, end);
      setFilteredItems([...filterItems]);
    } else {
      setFilteredItems([...items]);
    }
  }, [page, start, end, setFilteredItems, itemsPerPage]);

  const previousPageHandler = () => {
    setPage(page - 1 < 0 ? 0 : page - 1);
    setStart(start - itemsPerPage >= 0 ? start - itemsPerPage : start);
    setEnd(
      (page - 1) * itemsPerPage > items.length
        ? items.length
        : (page - 1) * itemsPerPage
    );
  };

  const nextPageHandler = () => {
    setPage(page + 1);
    setStart(
      start + itemsPerPage < items.length ? start + itemsPerPage : start
    );
    setEnd(
      (page + 1) * itemsPerPage > items.length
        ? items.length
        : (page + 1) * itemsPerPage
    );
  };

  return (
    <div
      className={`grid ${
        showPreviousBtn && showNextBtn ? 'grid-cols-2' : 'grid-cols-1'
      } grid-rows-1 gap-10 w-max justify-center my-8 mx-auto`}
    >
      {showPreviousBtn && (
        <button
          className='cta min-w-[12rem] mx-2 bg-black '
          onClick={previousPageHandler}
        >
          previous
        </button>
      )}
      {showNextBtn && (
        <button
          className='cta min-w-[12rem] mx-3 bg-black'
          onClick={nextPageHandler}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagination;
