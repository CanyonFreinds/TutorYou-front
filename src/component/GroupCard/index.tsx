import React from 'react';
import * as Style from './styled';

export interface GroupType {
  teacher: string;
  students: string[];
}

interface GroupCardProps {
  isTeacher: boolean;
  group: GroupType;
  giveStars: () => void;
  reportTeacher: () => void;
  fireGroup: () => void;
}

function GroupCard({ group, isTeacher, giveStars, reportTeacher, fireGroup }: GroupCardProps) {
  return (
    <Style.Container>
      <Style.Teacher>{group.teacher}</Style.Teacher>
      <Style.Description>선생님의 그룹</Style.Description>
      <Style.StudentList>
        {group.students.map((student) => (
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
          <Style.ControlButton variant="outlined" onClick={reportTeacher}>
            신고하기
          </Style.ControlButton>
        </>
      )}
    </Style.Container>
  );
}

export default GroupCard;
