import React from 'react';

import Button from '@spotify-clone/shared/src/components/button';

import s from './NowPlayingBar.module.scss';

const NowPlayingBar: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h2 className={s.title}>Spotify Önizlemesi</h2>
        <p className={s.description}>
          Şarkı ve podcast'lere sınırsız erişim ve aralarda çıkan reklamlar için kaydol. Kredi kartına gerek yok.
        </p>
      </div>

      <div><Button className={s.button}>Sign up free</Button></div>
    </div>
  );
};

export default NowPlayingBar;
