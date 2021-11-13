import React from 'react';
import * as Style from './styled';
import { GroupType } from '../../api/group';

interface GroupCardProps {
  isTeacher: boolean;
  group: GroupType;
  giveStars: () => void;
  reportTeacher: (teacherId: number, groupId: number) => void;
  fireGroup: () => void;
}

function GroupCard({ group, isTeacher, giveStars, reportTeacher, fireGroup }: GroupCardProps) {
  return (
    <Style.Container>
      <Style.Teacher>{group.teacherName}</Style.Teacher>
      <Style.Description>선생님의 그룹</Style.Description>
      <Style.StudentList>
        {group.studentNames.map((student) => (
          <Style.StudentItem>{student}</Style.StudentItem>
        ))}
      </Style.StudentList>
      {isTeacher ? (
        <Style.ControlButton variant="contained" onClick={fireGroup}>
          그룹해체
        </Style.ControlButton>
      ) : (
        <>
          <Style.ControlButton variant="contained" onClick={giveStars}>
            평점주기
          </Style.ControlButton>
          <Style.ControlButton variant="outlined" onClick={() => reportTeacher(group.teacherId, group.groupId)}>
            신고하기
          </Style.ControlButton>
        </>
      )}
    </Style.Container>
  );
}

export default GroupCard;
