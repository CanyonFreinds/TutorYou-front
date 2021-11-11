import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import LoginPage from './page/Login';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/teachers" component={TeachersPage} />
        <Route path="/profile/:id" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
