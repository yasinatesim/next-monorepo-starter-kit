import s from './index.module.scss';

function Playlist() {
  return (
    <nav className={s.playlist}>
      <ul>
        {new Array(40).fill(0).map((_, index) => (
          <li key={index}>
            <a href="#" className={s.link}>
              {index + 1}. Çalma Listem
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Playlist;
