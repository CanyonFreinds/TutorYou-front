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
  align-items: center;
  margin: auto;

  height: 100%;
  width: 100rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5rem 0;
  row-gap: 3rem;
`;

export const TitleInput = styled(TextField)`
  height: 100%;
`;

export const Selects = styled.div`
  display: flex;
  column-gap: 5rem;
`;

export const PostTypeSelectContainer = styled.div`
  width: 10rem;
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

export const TotalStudentCountInput = styled(TextField)`
`;

export const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
`;

export const DateCenterDivide = styled.p`
  font-size: 2rem;
  margin: 0;
`;

export const DateContainerWithLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DatePickerLabel = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
`;

export const SubmitButton = styled(Button)`
  font-size: 2rem;
  color: white;
`;