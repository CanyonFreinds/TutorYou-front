import React from 'react';
import * as Style from './styled';

export interface InfoType {
  imageSrc: string;
  nickname: string;
  hateCount: number;
  isBlackList: boolean;
}

interface BlackListCardProps {
  info: InfoType;
  clickButton: () => void;
}

function BlackListCard({ info, clickButton }: BlackListCardProps) {
  return (
    <Style.Container>
      <Style.Left>
        <Style.Image src={info.imageSrc} />
      </Style.Left>
      <Style.Right>
        <Style.Span>{info.nickname}</Style.Span>
        <Style.HateContainer>👎 {info.hateCount}</Style.HateContainer>
      </Style.Right>
      <Style.SubmitButton variant={info.isBlackList ? 'contained' : 'outlined'} onClick={clickButton}>
        {info.isBlackList ? '해제' : '등록'}
      </Style.SubmitButton>
    </Style.Container>
  );
}

export default BlackListCard;
