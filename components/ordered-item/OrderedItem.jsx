import React from 'react';
import Image from 'next/image';

const OrderedItem = ({
  item = {
    name: 'Fancy sunglass trendy for men',
    image:
      'https://res.cloudinary.com/new-optic-corner-abdul/image/upload/v1660224959/ygvqpn8wcjw4yqxc3b0g.jpg',

    qty: 1,
    price: 775,
  },
  createdAt = '2022-08-13T12:12:12.085Z',
}) => {
  console.log(item.createdAt);
  return (
    <div className='py-8'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center'>
        <div className='relative w-[4rem] h-[4rem] rounded overflow-hidden shadow-lg'>
          <Image alt={item.name} src={item.image} layout='fill' />
        </div>

        <p className='sm:ml-4 flex flex-col justify-start'>
          <span className='py-2'>{item.name}</span>
          <span className='py-2'>
            {item.qty} item <b> X </b> रु {item.price.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderedItem;
