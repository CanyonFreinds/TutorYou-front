import React from 'react';
import * as Style from './styled';

import RecruitmentListItem from '../../component/RecruitmentItem';
import RecruitmentAddFloatingActionButton from '../../component/RecruitmentAddFloatingActionButton';
import mockUpDatas from './mockUpData';

function Recruitments() {
  return (
    <Style.Container>
      <Style.SearchContainer>
        써치 컨테이너
      </Style.SearchContainer>
      <Style.ListContainer>
        {mockUpDatas.map(data => (
          <RecruitmentListItem
            key={data.id}
            id={data.id}
            title={data.title}
            postType={data.postType}
            userName={data.userName}
            category={data.category}
            totalStudentCount={data.totalStudentCount}
            applicantCount={data.applicantCount}
            createdAt={data.createdAt}
            updatedAt={data.updatedAt}
            startDate={data.startDate}
            endDate={data.endDate}
          />
        ))}
      </Style.ListContainer>
      <RecruitmentAddFloatingActionButton />
    </Style.Container>
  );
}

export default Recruitments;
