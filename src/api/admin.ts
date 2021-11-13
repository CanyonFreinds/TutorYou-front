import axios from 'axios';

interface GetTeacherListAPIRequest {
  pageNumber: number;
}

interface GetBlackListAPIRequest {
  pageNumber: number;
}

interface ChangeTeacherBanStateAPIRequest {
  teacherId: number;
}

export interface TeacherAdminType {
  banCount: number;
  baned: boolean;
  point: number;
  teacherId: number;
  teacherName: string;
}

interface GetTeachersAPIResponse {
  pageNumber: number;
  pageSize: number;
  results: TeacherAdminType[];
  total: number;
}

export const getTeacherListAPI = async ({ pageNumber }: GetTeacherListAPIRequest) => {
  try {
    const OFFSET = 20;
    const response = await axios({
      method: 'GET',
      url: `/api/v1/admin/teacher?offset=${OFFSET}&pageNumber=${pageNumber}`,
    });
    return response.data as GetTeachersAPIResponse;
  } catch (error) {
    return false;
  }
};

export const getBlackListAPI = async ({ pageNumber }: GetBlackListAPIRequest) => {
  try {
    const OFFSET = 20;
    const response = await axios({
      method: 'GET',
      url: `/api/v1/admin/teacher/blacklist?offset=${OFFSET}&pageNumber=${pageNumber}`,
    });
    return response.data as GetTeachersAPIResponse;
  } catch (error) {
    return false;
  }
};

export const changeTeacherBanStateAPI = async ({ teacherId }: ChangeTeacherBanStateAPIRequest) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/v1/admin/teacher/${teacherId}`,
    });
    return response;
  } catch (error) {
    return false;
  }
};
