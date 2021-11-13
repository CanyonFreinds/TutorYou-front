import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Style from './styled';

export interface RecruitmentProps {
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

interface Params {
  postId: string;
}

function Recruitment() {
  const { postId } = useParams<Params>();

  useEffect(() => {
    // API 호출 및 context state 저장
    console.log('postId', postId);
  }, []);

  return (
    <Style.Container>
      hi
    </Style.Container>
  );
}

export default Recruitment;
