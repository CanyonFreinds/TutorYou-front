import styled from '@emotion/styled';
import MaterialLoginIcon from '@mui/icons-material/Login';
import MaterialAccountCircleIcon from '@mui/icons-material/AccountCircle';
import MaterialNotificationsIcon from '@mui/icons-material/Notifications';
import MaterialLogoutIcon from '@mui/icons-material/Logout';
import MaterialSupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';

interface LinkProps {
  isPath: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 0 3rem 0 2rem;

  color: #ff6f61;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  cursor: pointer;
`;

export const Navigator = styled.nav``;

export const Link = styled.span<LinkProps>`
  margin: 0 2rem;
  font-size: 2.1rem;
  font-weight: bold;
  /* color: ${(props) => (props.isPath ? '#ff6f61' : '#fff')}; */
  opacity: ${(props) => (props.isPath ? '1' : '0.5')};

  &:hover {
    opacity: 0.9;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const LoginIcon = styled(MaterialLoginIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const LogoutIcon = styled(MaterialLogoutIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const AccountCircleIcon = styled(MaterialAccountCircleIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const NotificationsIcon = styled(MaterialNotificationsIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const SupervisorAccountIcon = styled(MaterialSupervisorAccountIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const MaterialChatIcon = styled(ChatIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;
