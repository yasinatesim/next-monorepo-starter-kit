import { useState } from 'react';
import { Resizable } from 'react-resizable';
import { LogoWhite, Plus, Heart } from '@spotify-clone/shared/src/universal/components/icon';

import Menu from './components/menu';
import Playlist from './components/playlist';
import DownloadApp from './components/download-app';

import s from './index.module.scss';

function Sidebar() {
  const [width, setWidth] = useState(240);

  const onResize = (_, { size }) => {
    setWidth(size.width);
  };

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      minConstraints={[130, 0]}
      maxConstraints={[395, 0]}
      handle={<div className={s.resizer} />}
    >
      <aside className={s.sidebar} style={{ width: `${width}px` }}>
        <div className={s.logo}>
          <a href="#">
            <LogoWhite height={40} />
          </a>
        </div>

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

          <Playlist />
          <DownloadApp />
        </nav>

      </aside>
    </Resizable>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
