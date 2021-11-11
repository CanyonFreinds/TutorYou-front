import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import LoginPage from './page/Login';
import Recruitments from './page/Recruitments';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/recruitments" component={Recruitments} />
        <Route path="/teachers" component={TeachersPage} />
        <Route path="/profile/:id" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
