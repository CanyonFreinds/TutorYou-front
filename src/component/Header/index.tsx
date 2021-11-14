import React, { useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as Style from './styled';
import {
  teaturesPath,
  recruitmentsPath,
  buildProfilePath,
  adminPath,
  loginPath,
  buildGroupPath,
  chatPath,
} from '../../Routes';
import { userStateContext } from '../../context/UserContext';
import Notification from '../Notification';

function Header() {
  const { pathname } = useLocation();
  const history = useHistory();
  const { state, dispatch } = useContext(userStateContext);

  const handleLogout = () => {
    if (dispatch) {
      dispatch({ type: 'logout' });
      history.push('/');
    }
  };

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
        {state.userId !== 0 && (
          <>
            <Link to={state.role[0] === 'ROLE_ADMIN' ? adminPath : buildGroupPath(state.userId)}>
              <Style.SupervisorAccountIcon />
            </Link>
            <Notification />
            <Link to={buildProfilePath(state.userId)}>
              <Style.AccountCircleIcon />
            </Link>
          </>
        )}
        {state.userId ? (
          <Style.LogoutIcon onClick={handleLogout} />
        ) : (
          <Link to={loginPath}>
            <Style.LoginIcon />
          </Link>
        )}
        <Link to={chatPath}>
          <Style.MaterialChatIcon />
        </Link>
      </Style.IconContainer>
    </Style.Container>
  );
}

export default Header;
