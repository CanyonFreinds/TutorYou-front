import React from 'react';
import * as Style from './styled';

// ref: https://stackoverflow.com/questions/37978528/typescript-type-string-is-not-assignable-to-type
type PostType = '1:1' | '1:M';
type Category = '수학' | '국어' | '영어' | '지구과학' | '화학' | '물리' | '생물' | '사회' | '코딩';

export interface RecruitmentListItemProps {
  id: number;
  title: string;
  postType: PostType;
  userName: string;
  category: Category;
  totalStudentCount: number;
  applicantCount: number;
  createdAt: string;
	updatedAt: string;
	startDate: string;
	endDate: string;
}

function RecruitmentListItem({
  title,
  postType,
  userName,
  category,
  totalStudentCount,
  applicantCount,
  createdAt,
  updatedAt,
  startDate,
  endDate,
}: RecruitmentListItemProps) {
  return (
    <Style.Container>
      <Style.LeftContainer>
        <Style.Profile
          alt="User profile"
        />
        <Style.CenterContainer>
          <Style.CenterTopContainer>
            <Style.Category color="info" size="small" label={category} />
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

export default RecruitmentListItem;
