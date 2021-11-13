/* eslint-disable no-alert */
import axios from 'axios';
import { CareerType } from './career';

export type OrderType = 'desc' | 'asc';
export type SortType = 'point' | 'studentCount' | '';
export type RoleType = 'ROLE_TEACHER' | 'ROLE_STUDENT' | 'ROLE_ADMIN' | 'NONE';

export interface ProfileType {
  id: number;
  name: string;
  point: number;
  studentCount: number;
  imageSrc: string;
  role: RoleType[];
  careers: CareerType[];
}

interface GetTeachersAPIResponse {
  pageNumber: number;
  pageSize: number;
  total: number;
  results: ProfileType[];
}

interface GetTeachersAPI {
  order: OrderType;
  pageNumber: number;
  query: string;
  sort: SortType;
}

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

interface ChangeTeacherAPIRequest {
  groupId: number;
  point: number;
  studentId: number;
  teacherId: number;
}

interface ReportTeacherAPIRequest {
  groupId: number;
  studentId: number;
  teacherId: number;
}

export const getTeachersAPI = async ({ order = 'asc', pageNumber, query = '', sort = '' }: GetTeachersAPI) => {
  try {
    const OFFSET = 20;

    const response = await axios({
      method: 'GET',
      url: `/api/v1/users/teachers?order=${order}&offset=${OFFSET}&pageNumber=${pageNumber}&query=${query}&sort=${sort}`,
    });

    return response.data as GetTeachersAPIResponse;
  } catch (error) {
    return false;
  }
};

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

export const changeTeacherPoint = async ({ groupId, point, studentId, teacherId }: ChangeTeacherAPIRequest) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/v1/users/${teacherId}/point`,
      data: {
        groupId,
        point,
        studentId,
      },
    });
    alert('제출완료');
    return response.data;
  } catch (error) {
    alert('error');
    return false;
  }
};

export const reportTeacherAPI = async ({ groupId, studentId, teacherId }: ReportTeacherAPIRequest) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/v1/users/${teacherId}/report`,
      data: {
        groupId,
        studentId,
        msg: '',
      },
    });
    alert('신고완료');
    return response.data;
  } catch (error) {
    alert('error');
    return false;
  }
};
