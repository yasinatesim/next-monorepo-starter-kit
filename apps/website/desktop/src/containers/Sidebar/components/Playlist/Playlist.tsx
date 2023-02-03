import React from 'react';

import s from './Playlist.module.scss';

const Playlist: React.FC = () => {
  return (
    <ul className={s.playlist}>
      {new Array(40).fill(0).map((_, index) => (
        <li key={index}>
          <a href="#" className={s.link}>
            {index + 1}. Çalma Listem
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
