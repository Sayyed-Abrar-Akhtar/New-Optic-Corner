import React from 'react';

import styles from '../../../styles/Sidebar.module.css';
import SidebarItem from './SidebarItem';

const Sidebar = ({ menus = [], baseUrl }) => {
  return (
    <aside>
      <ul className={styles.list}>
        {menus.map((menu, idx) => (
          <SidebarItem
            menuType={menu.type}
            menuLink={menu.link}
            menuName={menu.name}
            menuId={menu.id}
            baseUrl={baseUrl}
            key={idx}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
