import React, { useState } from 'react';
import { Resizable, ResizeCallbackData } from 'react-resizable';

import { LogoWhite } from '@spotify-clone/shared/src/components/Icons';

import DownloadApp from './components/DownloadApp';
import FeaturedList from './components/FeaturedList';
import Menu from './components/Menu';
import Playlist from './components/Playlist';

import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [width, setWidth] = useState(232);

  const onResize = (_: React.SyntheticEvent, { size }: ResizeCallbackData) => {
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
};

Sidebar.propTypes = {};

export default Sidebar;
