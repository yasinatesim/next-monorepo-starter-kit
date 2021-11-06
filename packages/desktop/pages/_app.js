import PropTypes from 'prop-types';

import '@spotify-clone/shared/src/assets/styles/app.scss';

function SpotifyDesktop({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

SpotifyDesktop.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default SpotifyDesktop;
