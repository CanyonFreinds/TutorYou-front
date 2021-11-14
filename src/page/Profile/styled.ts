import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

export const Container = styled.main`
  width: 800px;
  margin: 0 auto;
  padding-bottom: 10rem;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  font-size: 3rem;
  user-select: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Nickname = styled.h2`
  font-size: 5rem;
  margin: 0 3rem;
`;

export const CareerList = styled.ul`
  width: 630px;
`;

export const CareerItem = styled.li`
  margin-top: 2rem;
`;

export const ModifyButton = styled(Button)`
  font-size: 1.5rem;
`;

export const PasswordInput = styled(Input)`
  width: 200px;
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

export const ChangeButton = styled(Button)`
  font-size: 1.5rem;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border: 2px solid #000;
  box-shadow: 24;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`;
