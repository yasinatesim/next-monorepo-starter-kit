import { Download } from '@spotify-clone/shared/src/universal/components/icon';

import s from './index.module.scss';

function DownloadApp() {
  return (
    <a href="#" className={s.link}>
      <Download width={20} height={20} />
      Uygulamayı Yükle
    </a>
  );
}
export default DownloadApp;
