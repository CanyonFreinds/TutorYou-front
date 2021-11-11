import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import LoginPage from './page/Login';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';
import AdminPage from './page/Admin';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/teachers" component={TeachersPage} />
        <Route path="/profile/:id" component={ProfilePage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </>
  );
}

export default App;
