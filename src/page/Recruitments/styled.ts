import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

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
  height: 10rem;
  column-gap: 3rem;
  /* border: 0.1rem solid rgba(0, 0, 0, 0.1); */
  margin: 1rem 0;
`;

export const SearchInput = styled(TextField)`

`;

export const SelectWholeContainer = styled.div`
  width: 18rem;
`;

export const SelectContainer = styled(Select)`
  font-size: 1.8rem;
  width: 100%;
`;

export const SelectMenuItem = styled(MenuItem)`
  font-size: 1.5rem;
`;

export const SelectLabel = styled(InputLabel)`
  font-size: 1.5rem;
`;

export const SearchButton = styled(Button)`
  font-size: 1.5rem;
  color: white;
  width: 14rem;
  height: 6rem;
`;
