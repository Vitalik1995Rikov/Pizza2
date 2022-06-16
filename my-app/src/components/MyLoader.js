import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="88" cy="87" r="66" />
    <rect x="23" y="178" rx="0" ry="0" width="128" height="23" />
  </ContentLoader>
);

export default MyLoader;
