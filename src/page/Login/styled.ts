import styled from '@emotion/styled';
import MaterialInput from '@mui/material/Input';
import MaterialButton from '@mui/material/Button';
import MaterialTextField from '@mui/material/TextField';

export const Input = styled(MaterialInput)`
  width: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  margin: 2rem;
`;

export const TextField = styled(MaterialTextField)`
  width: 10rem;
  align: left;
  margin: 20px;
`;

export const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  //   text-align: center;
  //   margin-top: 2rem;
  //   justify: center;
`;
export const Button = styled(MaterialButton)`
  margin: 2rem;
`;