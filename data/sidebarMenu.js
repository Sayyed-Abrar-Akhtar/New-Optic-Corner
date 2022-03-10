import { CUSTOMIZE, ORDERS, PRODUCTS } from '../constant/GlobalConstants';

const menus = [
  {
    name: 'products',
    id: 'menu_products',
    link: '/products',
    type: `${PRODUCTS}`,
  },
  {
    name: 'orders',
    id: 'menu_orders',
    link: '/orders',
    type: `${ORDERS}`,
  },
  {
    name: 'customize',
    id: 'customize',
    link: '/customize',
    type: `${CUSTOMIZE}`,
  },
];

export default menus;
