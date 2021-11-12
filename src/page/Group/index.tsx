import React, { useState } from 'react';
import * as Style from './styled';
import GroupCard, { GroupType } from '../../component/GroupCard';

function Group() {
  const [groupList] = useState<GroupType[]>([]);

  const giveStrs = () => {};

  const reportTeacher = () => {};

  const fireGroup = () => {};

  return (
    <Style.Container>
      <Style.GroupList>
        {groupList.map((group) => (
          <Style.GroupItem>
            <GroupCard
              group={group}
              isTeacher={false}
              giveStars={giveStrs}
              reportTeacher={reportTeacher}
              fireGroup={fireGroup}
            />
          </Style.GroupItem>
        ))}
      </Style.GroupList>
    </Style.Container>
  );
}

export default Group;
