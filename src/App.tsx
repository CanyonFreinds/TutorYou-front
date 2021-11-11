import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import LoginPage from './page/Login';
import Recruitments from './page/Recruitments';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';
import AdminPage from './page/Admin';

import {
  adminPath,
  loginPath,
  recruitmentsPath,
  profilePath,
  teaturesPath,
} from './Routes';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={loginPath} component={LoginPage} />
        <Route path={recruitmentsPath} component={Recruitments} />
        <Route path={teaturesPath} component={TeachersPage} />
        <Route path={profilePath} component={ProfilePage} />
        <Route path={adminPath} component={AdminPage} />
      </Switch>
    </>
  );
}

export default App;
