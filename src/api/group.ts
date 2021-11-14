import axios from 'axios';

export interface GroupType {
  groupId: number;
  studentNames: string[];
  teacherId: number;
  teacherName: string;
}

export interface GroupPost {
  groupId: number;
  student: string;
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
    window.alert('error');
    return false;
  }
};

export const postGroupsAPI = async ({ groupId, userId }: { groupId: number; userId: number }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `api/v1/groups/${groupId}?userId=${userId}`,
    });

    return response.data as GroupPost;
  } catch (error) {
    window.alert('error');
    return false;
  }
};
