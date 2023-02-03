import { Download } from '@spotify-clone/shared/src/components/Icons';

import s from './DownloadApp.module.scss';

function DownloadApp() {
  return (
    <a href="#" className={s.link}>
      <Download width={20} height={20} />
      Uygulamayı Yükle
    </a>
  );
}
export default DownloadApp;
