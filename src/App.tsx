import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
