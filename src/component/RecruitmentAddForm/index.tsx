import React from 'react';
import * as Style from './styled';

interface Props {
  children: JSX.Element;
}

function RecruitmentAddForm({ children }: Props) {
  return (
    <Style.Container>
      {children}
    </Style.Container>
  );
}

export default RecruitmentAddForm;
