import React from 'react';
import * as Style from './styled';

interface RecruitmentEditButtonProps {
  onClick: () => void;
}

function RecruitmentFullJoinButton({ onClick }: RecruitmentEditButtonProps) {
  return (
    <Style.TextTooltip title="인원이 꽉 찼습니다.">
      <Style.Container onClick={onClick} color="inherit">
        <Style.Icon />
      </Style.Container>
    </Style.TextTooltip>
  );
}

export default RecruitmentFullJoinButton;
