import styled from '@emotion/styled';
import MaterialInput from '@mui/material/Input';
import MaterialButton from '@mui/material/Button';
import MaterialTextField from '@mui/material/TextField';

export const Input = styled(MaterialInput)`
  width: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  margin: 2rem;
  font-size: 'xx-large' !important;
`;

export const TextField = styled(MaterialTextField)`
  width: 10rem;
  align: left;
  margin: 20px;
  font-size: 'xx-large' !important;
`;

export const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Button = styled(MaterialButton)`
  font-size: 2rem;
  margin: 1rem;
  height: 5rem;
  width: 100%;
  color: white;
`;
