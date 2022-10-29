import React from 'react';
import Link from 'next/link';

import cls from 'classnames';

import { Collection, Home, Search } from '@spotify-clone/shared/src/components/Icons';

import s from './Menu.module.scss';

const ICON_SIZE = 24;

const Menu: React.FC = () => {
  const menuItems = [
    {
      name: 'Ana sayfa',
      icon: <Home width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/',
      active: true,
    },
    {
      name: 'Ara',
      icon: <Search width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/search',
    },
    {
      name: 'Kitapığın',
      icon: <Collection width={ICON_SIZE} height={ICON_SIZE} />,
      href: '/collection',
    },
  ];

  return (
    <nav className={s.menu}>
      <ul className={s.menuElements}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={cls(s.menuLink, { [s.active]: item.active })}>
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
