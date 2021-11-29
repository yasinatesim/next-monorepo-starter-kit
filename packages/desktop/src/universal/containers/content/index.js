import PropTypes from 'prop-types';

import Header from '@spotify-clone/desktop/src/universal/components/header';

import s from './index.module.scss';

function Content({ children }) {
  return (
    <main className={s.content}>
      <Header />

      {children}
    </main>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
