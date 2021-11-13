import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled';

import RecruitmentListItem from '../../component/RecruitmentItem';
import RecruitmentAddFloatingActionButton from '../../component/RecruitmentAddFloatingActionButton';
import mockUpDatas from './mockUpData';

function Recruitments() {
  useEffect(() => {
    // List API 호출 및 context 저장
  }, []);

  return (
    <Style.Container>
      <Style.SearchContainer>
        써치 컨테이너
      </Style.SearchContainer>
      <Style.ListContainer>
        {mockUpDatas.map(data => (
          <Link to={`/recruitment/${data.postId}`}>
            <RecruitmentListItem
              key={data.postId}
              postId={data.postId}
              title={data.title}
              postType={data.postType}
              userName={data.userName}
              categoryName={data.categoryName}
              totalStudentCount={data.totalStudentCount}
              applicantCount={data.applicantCount}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              startDate={data.startDate}
              endDate={data.endDate}
            />
          </Link>
        ))}
      </Style.ListContainer>
      <RecruitmentAddFloatingActionButton />
    </Style.Container>
  );
}

export default Recruitments;
