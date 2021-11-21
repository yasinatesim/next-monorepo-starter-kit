import { useEffect, useRef } from 'react';

import useWindowSize from '@spotify-clone/desktop/src/universal/utils/resize';

import NowPlayingBar from '@spotify-clone/desktop/src/universal/components/now-playing-bar';

import s from './index.module.scss';

function Footer() {
  const ref = useRef(null);

  const [height] = useWindowSize();

  useEffect(() => {
    if (height > 590) {
      document.querySelector('.wrapper').style.height = `calc(100% - ${ref.current.offsetHeight}px)`;
      ref.current.style.bottom = '0';
    } else {
      document.querySelector('.wrapper').style.height = '100%';
      ref.current.style.bottom = '-100%';
    }
  }, [height]);

  return (
    <div className={s.footer} ref={ref}>
      {/* burası footer */}
      <NowPlayingBar />
    </div>
  );
}

export default Footer;
