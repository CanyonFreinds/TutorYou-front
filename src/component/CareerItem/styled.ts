import styled from '@emotion/styled';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MaterialDeleteIcon from '@mui/icons-material/Delete';

export const Container = styled.div``;

export const Title = styled.h2`
  margin: 0;
  font-size: 3rem;
  user-select: none;
`;

export const Form = styled.form`
  display: flex;
`;

export const CareerInput = styled(Input)`
  width: 500px;
  margin-right: 1rem;
  font-size: 1.6rem;
`;

export const SubmitButton = styled(Button)`
  font-size: 1.8rem;
`;

export const ValueList = styled(List)``;

export const ValueItem = styled(ListItem)`
  font-size: 1.7rem;
`;

export const IconWrapper = styled(IconButton)``;

export const DeleteIcon = styled(MaterialDeleteIcon)`
  font-size: 2rem;
`;
