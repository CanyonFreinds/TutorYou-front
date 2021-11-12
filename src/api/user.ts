import axios from 'axios';

interface UpdateUserImageAPIRequest {
  formData: any;
  userId: string;
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
