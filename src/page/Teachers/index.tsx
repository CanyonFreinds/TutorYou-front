import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Style from './styled';
import TeacherCard from '../../component/TeacherCard';
import { getTeachersAPI, OrderType, SortType, ProfileType } from '../../api/user';

function Teachers() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState<OrderType>('asc');
  const [sort, setSort] = useState<SortType>('');
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const loader = useRef(null);

  const startChatting = () => {};

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber(pageNumber + 1);
    }
  }, []);

  const getTeachers = async () => {
    const result = await getTeachersAPI({ query, pageNumber, order, sort });
    if (result) {
      setProfiles([...profiles, ...result.results]);
    }
  };

  const clickNavItem = (sort: SortType, order: OrderType) => {
    setPageNumber(0);
    setSort(sort);
    setOrder(order);
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
    getTeachers();
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
          <Style.SearchButton variant="contained" onClick={getTeachers}>
            검색
          </Style.SearchButton>
        </Style.SearchBox>
      </Style.Header>
      <Style.ProfileList>
        {profiles.map((profile) => (
          <Style.ProfileItem>
            <TeacherCard profile={profile} startChatting={startChatting} />
          </Style.ProfileItem>
        ))}
      </Style.ProfileList>
      <div ref={loader} />
    </Style.Container>
  );
}

export default Teachers;
