import axios from 'axios';

interface UpdateUserImageAPIRequest {
  formData: any;
  userId: string;
}

interface DeleteUserAPIRequest {
  userId: string;
}

interface ChangePasswordAPIRequest {
  userId: string;
  beforePassword: string;
  afterPassword: string;
}

export const updateUserImageAPI = async ({ formData, userId }: UpdateUserImageAPIRequest) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/v1/users/${userId}/image`,
      data: {
        formData,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

export const changePasswordAPI = async ({ userId, beforePassword, afterPassword }: ChangePasswordAPIRequest) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/v1/users/${userId}/password`,
      data: {
        beforePassword,
        afterPassword,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

export const deleteUserAPI = async ({ userId }: DeleteUserAPIRequest) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/v1/users/${userId}`,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
