import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  height: 100%; // 헤더 height를 뺐습니다.
  width: 100rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  margin-bottom: 3rem;
  
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;