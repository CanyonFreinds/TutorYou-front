import React from 'react';
import * as Style from './styled';

// ref: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
type PostType = '1:1' | '1:M';
type Category = '수학' | '국어' | '영어' | '지구과학' | '화학' | '물리' | '생물' | '사회' | '코딩';

export interface RecruitmentItemProps {
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
}: RecruitmentItemProps) {
  return (
    <Style.Container>
      <Style.LeftContainer>
        <Style.Profile
          alt="User profile"
        />
        <Style.CenterContainer>
          <Style.CenterTopContainer>
            <Style.Category color="info" size="small" label={categoryName} />
            <Style.PostType color="info" size="small" label={postType} />
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
