import styled from '@emotion/styled';
import MaterialTextField from '@mui/material/TextField';
import MaterialInput from '@mui/material/Input';
import MaterialButton from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

export const TextField = styled(MaterialTextField)`
  width: 500px;
  font-size: 20px;
`;
export const TextFieldCareer = styled(MaterialTextField)`
  width: 400px;
  font-size: 20px;
`;

export const Input = styled(MaterialInput)`
  width: 400px;
  font-size: 20px;
`;

export const Button = styled(MaterialButton)`
  margin: 10px;
`;

export const ValueItem = styled(ListItem)`
  padding: 8px 0px 8px 0px;
  font-size: 1rem;
  margin: 5px;
`;

export const ValueList = styled(List)`
  margin-left: auto;
  margin-right: auto;

  width: 600px;
`;

export const Div = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto !important;
  width: 500px !important;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
`;
