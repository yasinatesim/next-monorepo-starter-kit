import { Heart,Plus } from '@spotify-clone/shared/src/components/Icons';

import s from './FeaturedList.module.scss';

function FeaturedList() {
  return (
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
  );
}

export default FeaturedList;
