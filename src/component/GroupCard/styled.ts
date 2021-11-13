import styled from '@emotion/styled';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

interface StarProps {
  selected: boolean;
}

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

export const StarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Star = styled(StarIcon)<StarProps>`
  color: ${(props) => (props.selected ? '#f0b24b' : '#d0d0d0')};
  font-size: 4rem;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  font-size: 2rem;
`;
