import React, { useState } from 'react';

import { LogoWhite, Plus, Heart } from '@spotify-clone/shared/src/universal/components/icon';

import Menu from './components/menu';

import s from './index.module.scss';

function Sidebar() {
  const [width, setWidth] = useState(false);

  return (
    <aside className={s.sidebar} style={{ width: `${width}px` }}>
      <div className={s.resizer}>
        <label>
          <input type="range" min="120" max="384" step="10" value={width} onChange={(e)=> setWidth(e.target.value)} />
        </label>
      </div>
      <a href="#" className={s.logo}>
        <LogoWhite height={40} />
      </a>

      <Menu />

      <nav className={s.nav}>
        <ul>
          <li>
            <a href="#" className={s.link}>
              <span className={s.plus}>
                <Plus width={12} height={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href="#" className={s.link}>
              <span className={s.heart}>
                <Heart width={12} height={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      {/* <Playlists />

      <DownloadApp />  */}
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
