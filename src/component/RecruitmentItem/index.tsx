import React from 'react';
import * as Style from './styled';

import type { RecruitmentListItem } from '../../api/recruitment';

function RecruitmentItem({
  title,
  postType,
  userName,
  categoryName,
  totalStudentCount,
  applicantCount,
  createdAt,
  updatedAt,
  startDate,
  endDate,
}: RecruitmentListItem) {
  return (
    <Style.Container>
      <Style.LeftContainer>
        <Style.Profile
          alt="User profile"
        />
        <Style.CenterContainer>
          <Style.CenterTopContainer>
            <Style.Category color="primary" size="small" label={categoryName} />
            <Style.PostType color="primary" size="small" label={postType} />
          </Style.CenterTopContainer>
          <Style.Title>
            {title}
          </Style.Title>
          <Style.CenterBottomContainer>
            <Style.UserName>
              {userName}
            </Style.UserName>
            {updatedAt ? (
              <Style.Date>
                {`${updatedAt} 수정됨`}
              </Style.Date>    
            ) : (
              <Style.Date>
                {createdAt}
              </Style.Date>
            )}
          </Style.CenterBottomContainer>
        </Style.CenterContainer>
      </Style.LeftContainer>
      <Style.RightContainer>
        <Style.PeopleCount>
          {applicantCount}/{totalStudentCount}
        </Style.PeopleCount>
        <Style.StartDate>
          시작 {startDate}
        </Style.StartDate>
        <Style.EndDate>
          종료 {endDate}
        </Style.EndDate>
      </Style.RightContainer>
    </Style.Container>
  );
}

export default RecruitmentItem;
