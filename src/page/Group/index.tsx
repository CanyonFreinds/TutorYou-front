import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import GroupCard from '../../component/GroupCard';
import { getGroupsAPI, GroupType } from '../../api/group';
import { reportTeacherAPI } from '../../api/user';

function Group() {
  const [groupList, setGroupList] = useState<GroupType[]>([]);

  const giveStrs = () => {};

  const reportTeacher = async (teacherId: number, groupId: number) => {
    await reportTeacherAPI({ studentId: 0, teacherId, groupId });
  };

  const fireGroup = () => {};

  const getGroups = async () => {
    const result = await getGroupsAPI({ userId: '' });
    if (result) {
      setGroupList(result);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

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
