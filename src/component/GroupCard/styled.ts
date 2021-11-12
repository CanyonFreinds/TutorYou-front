import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.main`
  width: 300px;
  padding: 1rem;

  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const Teacher = styled.h3`
  margin: 0;
  display: inline;
  font-size: 2.5rem;
`;

export const Description = styled.span`
  padding-left: 1rem;
  font-size: 2.1rem;
`;

export const StudentList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const StudentItem = styled.li`
  margin: 0 1rem;
  font-size: 1.7rem;
`;

export const ControlButton = styled(Button)`
  width: 100%;
  font-size: 1.5rem;
`;
