import axios from 'axios';

export type CareerType = 'EDUCATION_LEVEL' | 'PRIZE_EXP' | 'TUTOR_EXP';

interface AddUserCareerAPIRequest {
  userId: string;
  careerType: CareerType;
  content: string;
}

interface DeleteUserCareerAPIRequest {
  userId: string;
  careerId: string;
}

export const addUserCareerAPI = async ({ userId, careerType, content }: AddUserCareerAPIRequest) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `/api/v1/users/${userId}/careers`,
      data: {
        userId,
        careerType,
        content,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

export const deleteUserCareerapi = async ({ userId, careerId }: DeleteUserCareerAPIRequest) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `/api/v1/users/${userId}/careers/${careerId}`,
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
