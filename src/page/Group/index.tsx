import React, { useEffect, useState, useContext } from 'react';
import * as Style from './styled';
import GroupCard from '../../component/GroupCard';
import { getGroupsAPI, GroupType } from '../../api/group';
import { reportTeacherAPI, changeTeacherPoint } from '../../api/user';
import { userStateContext } from '../../context/UserContext';

function Group() {
  const { state } = useContext(userStateContext);
  const [groupList, setGroupList] = useState<GroupType[]>([]);

  const giveStrs = async (groupId: number, point: number, teacherId: number) => {
    await changeTeacherPoint({ groupId, point, teacherId, studentId: state.userId });
  };

  const reportTeacher = async (teacherId: number, groupId: number) => {
    await reportTeacherAPI({ studentId: state.userId, teacherId, groupId });
  };

  const fireGroup = () => {};

  const getGroups = async () => {
    const result = await getGroupsAPI({ userId: state.userId });
    if (result) {
      setGroupList(result);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  if (!state.userId) return <Style.Error>권한이 없습니다</Style.Error>;
  return (
    <Style.Container>
      <Style.GroupList>
        {groupList.map((group) => (
          <Style.GroupItem>
            <GroupCard
              group={group}
              isTeacher={state.role[0] === 'ROLE_TEACHER'}
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
