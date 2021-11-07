import React from 'react';
import Link from 'next/link';

import cls from 'classnames';

import { Home, Search, Collection } from '@spotify-clone/shared/src/universal/components/icon';

import s from './index.module.scss';

const ICON_SIZE = 24;

function Menu() {
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
        {menuItems.map((item) => (
          <li>
            <Link href="/collection">
              <a className={cls(s.menuLink, { [s.active]: item.active })}>
                {item.icon}
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
