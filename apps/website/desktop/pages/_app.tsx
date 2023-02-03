import React from 'react';

import Content from '@spotify-clone-web/desktop/src/containers/Content';
import Footer from '@spotify-clone-web/desktop/src/containers/Footer';
import Sidebar from '@spotify-clone-web/desktop/src/containers/Sidebar';

import '@spotify-clone/shared/src/assets/styles/app.scss';
import '@spotify-clone-web/desktop/src/assets/styles/app.scss';

type Props = {
  Component: React.ComponentType;
  pageProps: any;
};

const SpotifyDesktop: React.FC<Props> = ({ Component, pageProps }) => (
  <div className="wrapper">
    <Sidebar />
    <Content>
      <Component {...pageProps} />
    </Content>
    <Footer />
  </div>
);

export default SpotifyDesktop;
