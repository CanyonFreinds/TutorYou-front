import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Container = styled.div`
  width: 180px;
  height: 80px;
  padding: 0.5rem;
  display: flex;
  position: relative;

  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  user-select: none;
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #d0d0d0;
  padding-right: 0.5rem;
`;

export const Right = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 1.8rem;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HateContainer = styled.div`
  font-size: 1.5rem;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: -40px;
  left: 0px;
  width: 180px;
  height: 40px;
  font-size: 1.8rem;
`;
