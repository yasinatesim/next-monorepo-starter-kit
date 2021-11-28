import NowPlayingBar from '@spotify-clone/desktop/src/universal/components/now-playing-bar';

import s from './index.module.scss';

function Footer() {
  return (
    <div className={s.footer}>
      {/* burası footer */}
      <NowPlayingBar />
    </div>
  );
}

export default Footer;
