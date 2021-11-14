import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import * as Style from './styled';
import { GroupType } from '../../api/group';

interface GroupCardProps {
  isTeacher: boolean;
  group: GroupType;
  giveStars: (groupId: number, point: number, teacherId: number) => void;
  reportTeacher: (teacherId: number, groupId: number) => void;
  fireGroup: () => void;
}

function GroupCard({ group, isTeacher, giveStars, reportTeacher, fireGroup }: GroupCardProps) {
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(0);

  const toggleModal = () => {
    setOpen(!open);
  };

  const changePoint = (point: number) => {
    setPoint(point);
  };

  const clickPointButton = () => {
    giveStars(group.groupId, point, group.teacherId);
    toggleModal();
  };

  const meetingStart = () => {
    window.alert('구현중입니다.');
  };

  return (
    <Style.Container>
      <Modal open={open} onClose={toggleModal}>
        <Style.ModalBox>
          <Style.StarWrapper>
            {new Array(5).fill(0).map((_: number, index: number) => (
              <Style.Star key={Math.random() * 5} onClick={() => changePoint(index + 1)} selected={point > index} />
            ))}
          </Style.StarWrapper>
          <Style.SubmitButton onClick={clickPointButton}>평가하기</Style.SubmitButton>
        </Style.ModalBox>
      </Modal>
      <Style.Teacher>{group.teacherName}</Style.Teacher>
      <Style.Description>선생님의 그룹</Style.Description>
      <Style.StudentList>
        {group.studentNames.map((student) => (
          <Style.StudentItem key={student}>{student}</Style.StudentItem>
        ))}
      </Style.StudentList>
      {isTeacher ? (
        <Style.ControlButton variant="contained" onClick={fireGroup}>
          그룹해체
        </Style.ControlButton>
      ) : (
        <>
          <Style.ControlButton variant="contained" onClick={toggleModal}>
            평점주기
          </Style.ControlButton>
          <Style.ControlButton variant="outlined" onClick={() => reportTeacher(group.teacherId, group.groupId)}>
            신고하기
          </Style.ControlButton>
        </>
      )}
      <Style.ControlButton variant="outlined" onClick={meetingStart}>
        화상회의 시작
      </Style.ControlButton>
    </Style.Container>
  );
}

export default GroupCard;
