const withTM = require('next-transpile-modules')([
  '@spotify-clone/shared',
  '@spotify-clone-web/desktop',
  '@spotify-clone-web/mobile',
]);

module.exports = withTM();
