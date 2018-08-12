import React from 'react';

import Styles from '../styles.css';

const NoMatch = () => (
  <article className={Styles.emptystate}>
    <h1>Welcome</h1>
    <p>
      Sorry, that route is a 404.
    </p>
  </article>
);

export default NoMatch;
