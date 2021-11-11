import React, { useState } from 'react';
import * as Style from './styled';
import TeacherCard, { ProfileType } from '../../component/TeacherCard';

// const LIMIT = 10

function Teachers() {
  // const [offset, setOffset] = useState(0);
  const [profiles] = useState<ProfileType[]>([]);

  const startChatting = () => {};

  return (
    <Style.Container>
      <Style.ProfileList>
        {profiles.map((profile) => (
          <Style.ProfileItem>
            <TeacherCard profile={profile} startChatting={startChatting} />
          </Style.ProfileItem>
        ))}
      </Style.ProfileList>
    </Style.Container>
  );
}

export default Teachers;
