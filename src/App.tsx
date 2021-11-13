import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import LoginPage from './page/Login';
import Recruitments from './page/Recruitments';
import Recruitment from './page/Recruitment';
import RecruitmentWrite from './page/RecruitmentWrite';
import ProfilePage from './page/Profile';
import TeachersPage from './page/Teachers';
import AdminPage from './page/Admin';
import GroupPage from './page/Group';
import SignupPage from './page/Signup';

import { adminPath, loginPath, recruitmentsPath, recruitmentPath, recruitmentWritePath, profilePath, teaturesPath, groupPath, signupPath } from './Routes';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={loginPath} component={LoginPage} />
        <Route path={signupPath} component={SignupPage} />
        <Route path={recruitmentsPath} component={Recruitments} />
        <Route path={recruitmentPath} component={Recruitment} />
        <Route path={recruitmentWritePath} component={RecruitmentWrite} />
        <Route path={teaturesPath} component={TeachersPage} />
        <Route path={profilePath} component={ProfilePage} />
        <Route path={adminPath} component={AdminPage} />
        <Route path={groupPath} component={GroupPage} />
      </Switch>
    </>
  );
}

export default App;
