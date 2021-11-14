import axios from 'axios';

axios.defaults.baseURL = 'http://3.36.81.52:8080';

// ref: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
export type PostType = '1:1' | '1:M';
export type Category = '수학' | '국어' | '영어' | '지구과학' | '화학' | '물리' | '생물' | '사회' | '코딩';
export type OrderType = 'desc' | 'asc';

export interface RecruitmentListItem {
  applicantCount: number,
  categoryName: Category,
  createdAt: string,
  endDate: string,
  postId: number,
  postType: PostType,
  startDate: string,
  title: string,
  totalStudentCount: number,
  updatedAt: string,
  userName: string,
}

export interface Recruitment {
  applicantCount: number;
  categoryName: string;
  content: string;
  createdAt: string;
  endDate: string;
  groupId: number;
  postId: number;
  postType: string;
  startDate: string;
  title: string;
  totalStudentCount: number;
  updatedAt: string;
  userName: string;
}

export interface PostRecruitment {
  categoryName: string;
  content: string;
  endDate: string;
  postType: string;
  startDate: string;
  title: string;
  totalStudentCount: number;
  userId: number;
}

export interface GetPosts {
  order?: OrderType;
  pageNumber: number;
  pageSize?: number;
}

export const postRecruitmentAPI = async ({
  categoryName,
  content,
  endDate,
  postType,
  startDate,
  title,
  totalStudentCount,
  userId,
}: PostRecruitment) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `api/v1/posts`,
      data: {
        categoryName,
        content,
        endDate,
        postType,
        startDate,
        title,
        totalStudentCount,
        userId,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};

export const getRecruitmentsAPI = async ({ order = 'asc', pageNumber, pageSize = 10 }: GetPosts) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `api/v1/posts?order=${order}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
    });

    return response.data as RecruitmentListItem[];
  } catch (error) {
    return false;
  }
};

export const getRecruitmentAPI = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `api/v1/posts/${postId}`,
    });

    return response.data as Recruitment;
  } catch (error) {
    return false;
  }
};

export const putRecruitmentAPI = async ({ postId, postRequest }: { postId: number, postRequest: PostRecruitment }) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `api/v1/posts/${postId}`,
      data: postRequest,
    });

    return response.data as Recruitment;
  } catch (error) {
    return false;
  }
};

export const deleteRecruitmentAPI = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `api/v1/posts/${postId}`,
    });

    return response.data as Recruitment;
  } catch (error) {
    return false;
  }
};