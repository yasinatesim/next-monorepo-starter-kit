import { useState } from 'react';
import { Resizable } from 'react-resizable';
import { LogoWhite } from '@spotify-clone/shared/src/universal/components/icon';

import Menu from './components/menu';
import Playlist from './components/playlist';
import FeaturedList from './components/featured-list';
import DownloadApp from './components/download-app';

import s from './index.module.scss';

function Sidebar() {
  const [width, setWidth] = useState(232);

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
          <FeaturedList />

          <Playlist />
          <DownloadApp />
        </nav>

      </aside>
    </Resizable>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
