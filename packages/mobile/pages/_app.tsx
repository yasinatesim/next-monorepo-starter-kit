import React from 'react';

import '@spotify-clone/shared/src/assets/styles/app.scss';

type Props = {
  Component: React.ComponentType;
  pageProps: any;
};

const SpotifyMobile: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default SpotifyMobile;
