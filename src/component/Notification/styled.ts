import styled from '@emotion/styled';
import MaterialNotificationsIcon from '@mui/icons-material/Notifications';

export const IconWrapper = styled.div`
  position: relative;
`;

export const NotificationsIcon = styled(MaterialNotificationsIcon)`
  margin: 0 0.7rem;
  font-size: 3.5rem;
  cursor: pointer;
`;

export const Number = styled.div`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  font-weight: blue;
  background-color: red;
  cursor: pointer;
  user-select: none;
`;

export const NotificationList = styled.ul`
  position: absolute;
  bottom: -200px;
  right: 0;
  padding: 0;
  margin: 0;
  height: 200px;
  width: 300px;
  padding: 1rem;
  z-index: 3000;

  box-sizing: border-box;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const NotificationItem = styled.li`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border: none;
  }
`;

export const Text = styled.span`
  font-size: 1.5rem;
`;

export const DeleteButton = styled.button`
  font-size: 2rem;
`;
