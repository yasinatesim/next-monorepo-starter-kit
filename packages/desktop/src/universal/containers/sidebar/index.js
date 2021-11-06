import React from 'react';

import { LogoWhite } from '@spotify-clone/shared/src/universal/components/icon';

import Menu from './components/menu';

import s from './index.module.scss';

function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <a href="#" className={s.logo}>
        <LogoWhite />
      </a>

      <Menu />
      {/*

    <nav className="mt-6">
      <ul>
        <li>
          <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
              <Icon name="plus" size={12} />
            </span>
            Çalma Listesi Oluştur
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
              <Icon name="heart" size={12} />
            </span>
            Beğenilen Şarkılar
          </a>
        </li>
      </ul>
    </nav>

    <Playlists />

    <DownloadApp /> */}
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
