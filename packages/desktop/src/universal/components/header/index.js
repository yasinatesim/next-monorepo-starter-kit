import React from 'react';
import cls from 'classnames';

import { Menu } from '@headlessui/react';

import { Prev, Next, Down, Account } from '@spotify-clone/shared/src/universal/components/icon';

import s from './index.module.scss';

function Header() {
  const user = {
    name: 'yasinatesim',
    avatar: 'https://i.scdn.co/image/ab6775700000ee852dbad916e7d0ef6fec4551b2',
  };

  return (
    <div className={s.navbar}>
      <nav className={s.navigation}>
        <div className={s.link}>
          <Prev width="22" height="22" />
        </div>
        <div className={s.link}>
          <Next width="22" height="22" />
        </div>
      </nav>

      <div>search</div>

      <Menu as="div" className={s.dropdown}>
        {({ open }) => (
          <>
            <Menu.Button
              className={cls(s.dropdownButton, { [s.active]: open })}
            >
              <img src={user.avatar} alt="Avatar" className={s.avatar} />
              <span className={s.username}>{user.name}</span>
              <span className={cls(s.dropdownIcon, { [s.dropdownIconRotate]: open })}>
                <Down width={16} height={16} />
              </span>
            </Menu.Button>
            <Menu.Items className={s.menuItems}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={cls(s.menuItem, { [s.menuItemActive]: active })}
                    href="#"
                  >
                    Account
                    <Account width={16} height={16} />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={cls(s.menuItem, { [s.menuItemActive]: active })}
                    href="#"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={cls(s.menuItem, { [s.menuItemActive]: active })}
                    href="#"
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export default Header;
