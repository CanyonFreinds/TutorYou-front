import React from 'react';
import * as Style from './styled';
import { TeacherAdminType } from '../../api/admin';

interface BlackListCardProps {
  info: TeacherAdminType;
  clickButton: (teacherId: number) => void;
}

function BlackListCard({ info, clickButton }: BlackListCardProps) {
  return (
    <Style.Container>
      <Style.Left>
        <Style.Image src={info.imageSrc} />
      </Style.Left>
      <Style.Right>
        <Style.Span>{info.teacherName}</Style.Span>
        <Style.HateContainer>👎 {info.banCount}</Style.HateContainer>
      </Style.Right>
      <Style.SubmitButton variant={info.baned ? 'contained' : 'outlined'} onClick={() => clickButton(info.teacherId)}>
        {info.baned ? '해제' : '등록'}
      </Style.SubmitButton>
    </Style.Container>
  );
}

export default BlackListCard;
