import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled';

import { useRecruitmentPostContext } from '../../context/RecruitmentPostContext';
import RecruitmentListItem from '../../component/RecruitmentItem';
import RecruitmentAddFloatingActionButton from '../../component/RecruitmentAddFloatingActionButton';
import { getRecruitmentsAPI, RecruitmentListItem as RecruitmentListItemType } from '../../api/recruitment';
import { buildRecruitmentPath } from '../../Routes';
import { userStateContext } from '../../context/UserContext';

function Recruitments() {
  const { setCurrentPostList, currentPostList }: any = useRecruitmentPostContext();
  const { state } = useContext(userStateContext);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    // List API 호출 및 context 저장
    (async () => {
      const recruitments = await getRecruitmentsAPI({ pageNumber });
      setCurrentPostList(recruitments);
      console.log('recruitments', recruitments);
      setPageNumber((prev) => prev + 1);
    })();
  }, []);

  return (
    <Style.Container>
      <Style.SearchContainer>
        써치 컨테이너
      </Style.SearchContainer>
      <Style.ListContainer>
        {currentPostList.map((data: RecruitmentListItemType)  => (
          <Link key={data.postId} to={buildRecruitmentPath(data.postId)}>
            <RecruitmentListItem
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
      {(state.role[0] === 'ROLE_TEACHER') && <RecruitmentAddFloatingActionButton /> }
    </Style.Container>
  );
}

export default Recruitments;
