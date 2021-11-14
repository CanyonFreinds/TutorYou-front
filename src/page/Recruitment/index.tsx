import React, { useEffect, useContext, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import { useRecruitmentPostContext } from '../../context/RecruitmentPostContext';
import MarkdownViewer from '../../component/MarkdownViewer';
import RecruitmentDeleteButton from '../../component/RecruitmentDeleteButton';
import RecruitmentEditButton from '../../component/RecruitmentEditButton';
import RecruitmentJoinButton from '../../component/RecruitmentJoinButton';
import { getRecruitmentAPI, deleteRecruitmentAPI } from '../../api/recruitment';
import { postGroupsAPI } from '../../api/group';
import * as Style from './styled';
import { MOMENT_FORMAT } from '../../constants';
import { recruitmentsPath, recruitmentWritePath, loginPath } from '../../Routes';
import { userStateContext } from '../../context/UserContext';
import { showToast } from '../../component/Toast';

interface Params {
  postId: string;
}

function Recruitment() {
  const { postId } = useParams<Params>();
  const { setCurrentPost, currentPost }: any = useRecruitmentPostContext();
  const { state } = useContext(userStateContext);
  
  const history = useHistory();

  const isCurrentUser = useMemo(() => state.name === currentPost.userName, [state.name, currentPost.userName]);
  const isStudent = useMemo(() => state.role[0] === 'ROLE_STUDENT', [state]);

  useEffect(() => {
    console.log('state.groups', state.studentGroups);
  }, [state.studentGroups])

  // const isJoinedGroup = useMemo(() => {
  //   // groupState.currentUserGroups.includes(currentPost.groupId)

  //   console.log('groupState.currentUserGroups', groupState.currentUserGroups);
  //   console.log('currentPost.groupId', currentPost.groupId);
    
    
  // }, [groupState.currentUserGroups, currentPost.groupId]);

  useEffect(() => { 
    (async () => {
      const recruitment = await getRecruitmentAPI({ postId: Number(postId) });
      console.log('recruitment', recruitment);
      
      setCurrentPost(recruitment);
    })();
  }, []);

  const onClickDeleteButton = async () => {
    const response = await deleteRecruitmentAPI({ postId: Number(postId) });
    console.log('delete response', response);
    history.replace(recruitmentsPath);
  }

  const onClickEditButton = async () => {
    history.push({
      pathname: recruitmentWritePath,
      state: { isEdit: true, postId },
    });
  }

  const onClickJoinButton = async () => {
    if (!state.userId) {
      showToast('로그인 후 참여해주세요.');
      history.push(loginPath);
    }

    if (isStudent) {
      const response = await postGroupsAPI({ groupId: currentPost.groupId, userId: state.userId });

      if (response) {
        console.log('response', response);
        showToast('그룹에 참가가 되었습니다.');
      } else {
        showToast('에러가 발생했습니다.');
      }
    }
  }
  
  return (
    <Style.Container>
      <Style.Title>
        {currentPost.title}
      </Style.Title>
      <Style.MidContainer>
        <Style.UserName>
          {currentPost.userName} 
        </Style.UserName>
        <Style.CreatedAt>
          {currentPost.updatedAt !== currentPost.createdAt ? (
            <>
              {`${moment(currentPost.updatedAt).format(MOMENT_FORMAT)}에 수정됨`}
            </>
          ) : (
            <>
              {`${moment(currentPost.createdAt).format(MOMENT_FORMAT)}에 생성됨`}
            </>
          )}
        </Style.CreatedAt>
      </Style.MidContainer>

      <Style.MidContainer>
        <Style.TextChip color="primary" label={currentPost.categoryName} />
        <Style.TextChip color="primary" label={currentPost.postType} />
        {currentPost.totalStudentCount === currentPost.applicantCount ? (
          <Style.TextChip
            color="primary"
            label={`${currentPost.totalStudentCount}명중 ${currentPost.applicantCount}명 모든 인원이 참가하였습니다.`}
          />
        ): (
          <Style.TextChip
            color="secondary"
            label={`${currentPost.totalStudentCount}명중 ${currentPost.applicantCount}명이 참여하고 있습니다.`}
          />
        )}
      </Style.MidContainer>
      <Style.BottomContainer>
        <Style.Date>
          {currentPost.startDate}
          <Style.DateComment>
            에서
          </Style.DateComment>
          {currentPost.endDate}
          <Style.DateComment>
            까지
          </Style.DateComment>
        </Style.Date>
      </Style.BottomContainer>
      <Style.MarkdownContainer>
        <MarkdownViewer content={currentPost.content} />
      </Style.MarkdownContainer>
      {isCurrentUser && <RecruitmentDeleteButton onClick={onClickDeleteButton} />}
      {isCurrentUser && <RecruitmentEditButton onClick={onClickEditButton} />}
      {!isCurrentUser && <RecruitmentJoinButton onClick={onClickJoinButton} />}
    </Style.Container>
  );
}

export default Recruitment;
