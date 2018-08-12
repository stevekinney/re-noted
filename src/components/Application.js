import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoteListContainer from '../containers/NoteListContainer';
import EmptyState from './EmptyState';
import NoteViewContainer from '../containers/NoteViewContainer';
import NoMatch from './NoMatch';

import Styles from '../styles.css';

const Application = () => (
  <div className={Styles.container}>
    <header className={Styles.header}>
      <h1 className={Styles.header__title}>Hello World!</h1>
    </header>
    <NoteListContainer />
    <Switch>
      <Route exact path="/" component={EmptyState} />
      <Route path="/notes/:id" component={NoteViewContainer} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Application;
