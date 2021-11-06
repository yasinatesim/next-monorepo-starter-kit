import PropTypes from 'prop-types';

import '@spotify-clone/shared/src/assets/styles/app.scss';

function SpotifyMobile({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

SpotifyMobile.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default SpotifyMobile;
