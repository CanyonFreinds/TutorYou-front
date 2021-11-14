import axios from 'axios';

export interface NotifiactionType {
  notificationId: number;
  message: string;
}

interface DeleteNotificationAPIRequest {
  notificationId: number;
}

export const deleteNotificationAPI = async ({ notificationId }: DeleteNotificationAPIRequest) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/notifications/${notificationId}`,
      data: {
        notificationId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
