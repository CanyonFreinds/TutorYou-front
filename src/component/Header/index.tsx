import React from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled';

function Header() {
  return (
    <Style.Container>
      <Style.Title>TutorYou</Style.Title>
      <Style.Navigator>
        <Link to="/">
          <Style.Link>과외 찾기</Style.Link>
        </Link>
        <Link to="/">
          <Style.Link>선생님 목록</Style.Link>
        </Link>
      </Style.Navigator>
      <Style.IconContainer>
        <Style.SupervisorAccountIcon />
        <Style.NotificationsIcon />
        <Style.AccountCircleIcon />
        <Style.LoginIcon />
        <Style.LogoutIcon />
      </Style.IconContainer>
    </Style.Container>
  );
}

export default Header;
