import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Menu } from 'antd';

import { navItems } from './navItems';

import styles from './styles.module.scss';

const { Item, SubMenu } = Menu;

const SideNavigationMenu = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleNavItemClick = (navItem) => {
    if (navItem.path) {
      navigate(navItem.path);

    }
  };

  const renderNavItems = (navItem) => {
    if (navItem.children) {
      return (
        <SubMenu key={navItem.key} icon={navItem.icon ?? null} title={navItem.title ? t(navItem.title) : ''}>
          {navItem.children.map(renderNavItems)}
        </SubMenu>
      );
    }

    return (
      <Item
        key={navItem.key}
        icon={navItem.icon ?? null}
        title={navItem.title ? t(navItem.title) : ''}
        onClick={() => handleNavItemClick(navItem)}
      >
        {navItem.title ? t(navItem.title) : ''}
      </Item>
    );
  };

  return (
    <Menu mode="inline" className={styles.sideNavMenu}>
      {navItems.map(renderNavItems)}
    </Menu>
  );
};

export default SideNavigationMenu;
