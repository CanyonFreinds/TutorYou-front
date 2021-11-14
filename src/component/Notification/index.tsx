import React, { useRef, useState, useContext, useEffect } from 'react';
import * as Style from './styled';
import { userStateContext } from '../../context/UserContext';
import { deleteNotificationAPI, NotifiactionType } from '../../api/notification';

function Notification() {
  const sockerRef = useRef<WebSocket>();
  const [modalOpen, setModalOpen] = useState(false);
  const [notification, setNotification] = useState<NotifiactionType[]>([]);
  const { state } = useContext(userStateContext);

  const sendUserId = () => {
    if (!sockerRef.current) return;
    const msgJSON = JSON.stringify({
      type: 'receiveUserId',
      userId: state.userId,
    });
    sockerRef.current.send(msgJSON);
  };

  const receiveNotification = (data: NotifiactionType[]) => {
    setNotification(data);
  };

  const deleteNotification = async (notificationId: number) => {
    const result = await deleteNotificationAPI({ notificationId });
    if (result !== false) {
      const filteredList = notification.filter((item) => item.notificationId !== notificationId);
      setNotification(filteredList);
    }
  };

  useEffect(() => {
    sockerRef.current = new WebSocket('ws://3.36.81.52:8080/notifications');

    sockerRef.current.onmessage = function getMessage(event) {
      const data = JSON.parse(event.data);
      const type = data.type as string;

      switch (type) {
        case 'sendUserId':
          sendUserId();
          break;
        case 'sendNotification':
          receiveNotification(data.notifications);
          break;
        default:
          break;
      }
    };
  }, []);

  return (
    <Style.IconWrapper>
      <Style.NotificationsIcon onClick={() => setModalOpen(!modalOpen)} />
      <Style.Number onClick={() => setModalOpen(!modalOpen)}>{notification.length}</Style.Number>
      {modalOpen && (
        <Style.NotificationList>
          {notification.map((item) => (
            <Style.NotificationItem key={item.notificationId} onClick={() => deleteNotification(item.notificationId)}>
              <Style.Text>{item.message}</Style.Text>
            </Style.NotificationItem>
          ))}
        </Style.NotificationList>
      )}
    </Style.IconWrapper>
  );
}

export default Notification;
