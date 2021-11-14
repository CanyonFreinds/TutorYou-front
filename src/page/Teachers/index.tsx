import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import * as Style from './styled';
import TeacherCard from '../../component/TeacherCard';
import { getTeachersAPI, OrderType, SortType, ProfileType } from '../../api/user';
import { createChatRoom } from '../../api/chat';
import { userStateContext } from '../../context/UserContext';

function Teachers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState<OrderType>('asc');
  const [sort, setSort] = useState<SortType>('');
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const { state } = useContext(userStateContext);

  const loader = useRef(null);

  const startChatting = async (id: number) => {
    if (id === state.userId) {
      window.alert('자신과의 대화는 불가능합니다');
      return;
    }
    const result = await createChatRoom({ studentId: state.userId, teacherId: id });
    if (result !== false) {
      window.alert('채팅방이 생성되었습니다');
    }
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber(pageNumber + 1);
    }
  }, []);

  const getTeachers = async (overide: boolean) => {
    const result = await getTeachersAPI({ query, pageNumber, order, sort });
    const currentProfiles = overide ? profiles : [];
    if (result) {
      setProfiles([...currentProfiles, ...result.results]);
    }
  };

  const clickNavItem = (sort: SortType, order: OrderType) => {
    setPageNumber(0);
    setProfiles([]);
    setSort(sort);
    setOrder(order);
  };

  const handleSearch = () => {
    setProfiles([]);
    setPageNumber(0);
    getTeachers(false);
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    getTeachers(true);
  }, [pageNumber, sort, order]);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Nav>
          <Style.NavItem selected={sort === 'point' && order === 'desc'} onClick={() => clickNavItem('point', 'desc')}>
            평점 높은 순
          </Style.NavItem>
          <Style.NavItem selected={sort === 'point' && order === 'asc'} onClick={() => clickNavItem('point', 'asc')}>
            평점 낮은 순
          </Style.NavItem>
          <Style.NavItem
            selected={sort === 'studentCount' && order === 'desc'}
            onClick={() => clickNavItem('studentCount', 'desc')}
          >
            학생 많은 순
          </Style.NavItem>
          <Style.NavItem
            selected={sort === 'studentCount' && order === 'asc'}
            onClick={() => clickNavItem('studentCount', 'asc')}
          >
            학생 적은 순
          </Style.NavItem>
        </Style.Nav>
        <Style.SearchBox>
          <Style.Search
            placeholder="선생님 이름 입력"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Style.SearchButton variant="contained" onClick={handleSearch}>
            검색
          </Style.SearchButton>
        </Style.SearchBox>
      </Style.Header>
      <Style.ProfileList>
        {profiles.map((profile) => (
          <Style.ProfileItem key={profile.id}>
            <TeacherCard profile={profile} startChatting={startChatting} />
          </Style.ProfileItem>
        ))}
      </Style.ProfileList>
      <div ref={loader} />
    </Style.Container>
  );
}

export default Teachers;
