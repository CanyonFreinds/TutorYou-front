import React from 'react';
import * as Style from './styled';

interface RecruitmentEditButtonProps {
  onClick: () => void;
}

function RecruitmentAlreadyJoinButton({ onClick }: RecruitmentEditButtonProps) {
  return (
    <Style.TextTooltip title="이미 참여했습니다.">
      <Style.Container onClick={onClick} color="inherit">
        <Style.Icon />
      </Style.Container>
    </Style.TextTooltip>
  );
}

export default RecruitmentAlreadyJoinButton;
