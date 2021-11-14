import axios from 'axios';

export interface GroupType {
  groupId: number;
  studentNames: string[];
  teacherId: number;
  teacherName: string;
}

interface GetGoupsAPIRequest {
  userId: number;
}

export const getGroupsAPI = async ({ userId }: GetGoupsAPIRequest) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `api/v1/groups?userId=${userId}`,
    });

    return response.data as GroupType[];
  } catch (error) {
    return false;
  }
};
