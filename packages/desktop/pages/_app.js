import PropTypes from 'prop-types';

import Sidebar from '@spotify-clone/desktop/src/universal/containers/sidebar';
import Footer from '@spotify-clone/desktop/src/universal/containers/footer';
import Content from '@spotify-clone/desktop/src/universal/containers/content';

import '@spotify-clone/shared/src/assets/styles/app.scss';

import '@spotify-clone/desktop/src/assets/styles/app.scss';

function SpotifyDesktop({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Sidebar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </div>
  );
}

SpotifyDesktop.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default SpotifyDesktop;
