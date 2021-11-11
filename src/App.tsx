import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import LoginPage from './page/Login';
import Recruitments from './page/Recruitments';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';

import {
  PROFILE_PAGE, LOGIN_PAGE, TEACHERS_PAGE, RECRUITMENTS_PAGE,
} from './constants';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={LOGIN_PAGE} component={LoginPage} />
        <Route path={RECRUITMENTS_PAGE} component={Recruitments} />
        <Route path={TEACHERS_PAGE} component={TeachersPage} />
        <Route path={`${PROFILE_PAGE}/:id`} component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
