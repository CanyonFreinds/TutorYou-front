import React from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled';

import { recruitmentWritePath } from '../../Routes';

function RecruitmentAddFloatingActionButton() {
  return (
    <Link to={recruitmentWritePath}>
      <Style.Container color="primary">
        <Style.Icon />
      </Style.Container>
    </Link>
  );
}

export default RecruitmentAddFloatingActionButton;
