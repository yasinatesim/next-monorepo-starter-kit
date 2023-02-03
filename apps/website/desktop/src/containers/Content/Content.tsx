import React from 'react';

import Header from '../../components/Header';

import s from './Content.module.scss';

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.wrapper}>
      <Header />

      {/* https://api.spotify.com/v1/views/desktop-home?timestamp=2021-12-01T23%3A04%3A20.381Z&platform=web&content_limit=10&limit=20&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation%2Cepisode&image_style=gradient_overlay&include_external=audio&country=TR&locale=en&market=TR */}
      <div className={s.content}>{children}</div>
    </main>
  );
};

export default Content;
