import axios from 'axios';

export type CareerSort = 'EDUCATION_LEVEL' | 'PRIZE_EXP' | 'TUTOR_EXP';

export interface CareerType {
  careerId: number;
  careerType: CareerSort;
  content: string;
}

interface AddUserCareerAPIRequest {
  userId: number;
  careerType: CareerSort;
  content: string;
}

interface DeleteUserCareerAPIRequest {
  userId: number;
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
