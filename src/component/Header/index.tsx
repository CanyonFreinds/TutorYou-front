import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Style from './styled';
import { teaturesPath, recruitmentsPath, buildProfilePath, adminPath } from '../../Routes';

function Header() {
  const { pathname } = useLocation();

  return (
    <Style.Container>
      <Style.Title>
        <Link to="/">TutorYou</Link>
      </Style.Title>
      <Style.Navigator>
        <Link to={recruitmentsPath}>
          <Style.Link isPath={pathname === recruitmentsPath}>과외 찾기</Style.Link>
        </Link>
        <Link to={teaturesPath}>
          <Style.Link isPath={pathname === teaturesPath}>선생님 목록</Style.Link>
        </Link>
      </Style.Navigator>
      <Style.IconContainer>
        <Link to={adminPath}>
          <Style.SupervisorAccountIcon />
        </Link>
        <Style.NotificationsIcon />
        <Link to={buildProfilePath('dummy')}>
          <Style.AccountCircleIcon />
        </Link>
        <Style.LoginIcon />
        <Style.LogoutIcon />
      </Style.IconContainer>
    </Style.Container>
  );
}

export default Header;
