import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled';

import { useRecruitmentPostContext } from '../../context/RecruitmentPostContext';
import RecruitmentListItem from '../../component/RecruitmentItem';
import RecruitmentAddFloatingActionButton from '../../component/RecruitmentAddFloatingActionButton';
import { getRecruitmentsAPI, RecruitmentListItem as RecruitmentListItemType, searchRecruitmentAPI } from '../../api/recruitment';
import { buildRecruitmentPath } from '../../Routes';
import { userStateContext } from '../../context/UserContext';
import { showToast } from '../../component/Toast';

type Category = '국어' | '수학' | '영어' | '지구과학' | '화학' | '물리' | '생물' | '코딩';
type SearchType = 'TITLE' | 'CATEGORY' | 'CONTENT' | 'AUTHOR';

function Recruitments() {
  const { setCurrentPostList, currentPostList }: any = useRecruitmentPostContext();
  const { state } = useContext(userStateContext);
  const [searchInput, setSearchInput] = useState<string>('');

  const [searchType, setSearchType] = useState<SearchType>('TITLE');
  const [isCategorySearch, setIsCategorySearch] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>('국어');

  useEffect(() => {
    // List API 호출 및 context 저장
    (async () => {
      const recruitments = await getRecruitmentsAPI({ pageNumber: 0 });
      setCurrentPostList(recruitments);
    })();
  }, []);

  useEffect(() => {
    if (searchType === 'CATEGORY') {
      setIsCategorySearch(true);
    } else {
      setIsCategorySearch(false);
    }
  }, [searchType]);

  const onClickGetAllList = async () => {
    const recruitments = await getRecruitmentsAPI({ pageNumber: 0 });
    setCurrentPostList(recruitments);
  }

  const onClickSearch = async () => {
    let response = null;
    if (isCategorySearch) {
      response = await searchRecruitmentAPI({ type: searchType, query: category });
    } else {
      response = await searchRecruitmentAPI({ type: searchType, query: searchInput });
    }

    if (response) {
      setCurrentPostList(response);
      showToast('검색 완료했습니다.');
    } else {
      showToast('검색 실패했습니다.');
    }
  };
  
  const onChangeSearchInput = (event: any) => {
    setSearchInput(event.target.value);
  }

  const onChangeSearchType = (event: any) => {
    setSearchType(event.target.value);
  };

  const onChangeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <Style.Container>
      <Style.SearchContainer>
        <Style.SelectWholeContainer>
          <Style.SelectLabel htmlFor="searchType">검색 타입</Style.SelectLabel>
          <Style.SelectContainer
            id="searchType"
            value={searchType}
            variant="standard"
            onChange={onChangeSearchType}
          >
            <Style.SelectMenuItem value="TITLE">제목</Style.SelectMenuItem>
            <Style.SelectMenuItem value="CONTENT">내용</Style.SelectMenuItem>
            <Style.SelectMenuItem value="AUTHOR">선생님 이름</Style.SelectMenuItem>
            <Style.SelectMenuItem value="CATEGORY">카테고리</Style.SelectMenuItem>
          </Style.SelectContainer>
        </Style.SelectWholeContainer>

        {isCategorySearch ? (
        <Style.SelectWholeContainer>
          <Style.SelectLabel htmlFor="category">카테고리</Style.SelectLabel>
          <Style.SelectContainer
            id="category"
            value={category}
            variant="standard"
            onChange={onChangeCategory}
          >
            <Style.SelectMenuItem value="국어">국어</Style.SelectMenuItem>
            <Style.SelectMenuItem value="수학">수학</Style.SelectMenuItem>
            <Style.SelectMenuItem value="영어">영어</Style.SelectMenuItem>
            <Style.SelectMenuItem value="화학">화학</Style.SelectMenuItem>
            <Style.SelectMenuItem value="지구과학">지구과학</Style.SelectMenuItem>
            <Style.SelectMenuItem value="물리">물리</Style.SelectMenuItem>
            <Style.SelectMenuItem value="생물">생물</Style.SelectMenuItem>
            <Style.SelectMenuItem value="코딩">코딩</Style.SelectMenuItem>
          </Style.SelectContainer>
        </Style.SelectWholeContainer>
        ) : (
          <Style.SearchInput
            onChange={onChangeSearchInput}
            value={searchInput}
            label="검색어"
            InputLabelProps={{ style: { fontSize: '2rem' } }}
            inputProps={{ style: { fontSize: '2rem' } }}
          />
        )}

        <Style.SearchButton
          type="button"
          onClick={onClickSearch}
          variant="contained"
        >
          검색하기
        </Style.SearchButton>

        <Style.SearchButton
          type="button"
          onClick={onClickGetAllList}
          variant="contained"
          color="info"
        >
          전체 리스트 보기
        </Style.SearchButton>

      </Style.SearchContainer>
      <Style.ListContainer>
        {currentPostList.map((data: RecruitmentListItemType)  => (
          <Link key={data.postId} to={buildRecruitmentPath(data.postId)}>
            <RecruitmentListItem
              postId={data.postId}
              title={data.title}
              postType={data.postType}
              userName={data.userName}
              categoryName={data.categoryName}
              totalStudentCount={data.totalStudentCount}
              applicantCount={data.applicantCount}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              startDate={data.startDate}
              endDate={data.endDate}
            />
          </Link>
        ))}
      </Style.ListContainer>
      {(state.role[0] === 'ROLE_TEACHER') && <RecruitmentAddFloatingActionButton /> }
    </Style.Container>
  );
}

export default Recruitments;
