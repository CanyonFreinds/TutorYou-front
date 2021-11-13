import axios from 'axios';

interface postRecruitmentProps {
  categoryName: string;
  content: string;
  endDate: string;
  postType: string;
  startDate: string;
  title: string;
  totalStudentCount: number;
  userId: number;
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
}: postRecruitmentProps) => {
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
