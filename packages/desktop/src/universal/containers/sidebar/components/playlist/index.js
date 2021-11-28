import s from './index.module.scss';

function Playlist() {
  return (
    <div className={s.playlist}>
      {new Array(40).fill(0).map((_, index) => (
        <li key={index}>
          <a href="#" className={s.link}>
            {index + 1}. Çalma Listem
          </a>
        </li>
      ))}
    </div>
  );
}

export default Playlist;
