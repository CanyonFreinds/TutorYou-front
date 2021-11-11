import styled from '@emotion/styled';
import Button from '@mui/material/Button';

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
