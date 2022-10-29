import React from 'react';

import NowPlayingBar from '@spotify-clone/desktop/src/components/NowPlayingBar';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <NowPlayingBar />
    </div>
  );
};

export default Footer;
