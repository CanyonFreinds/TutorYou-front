import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  padding: 1rem 2rem;
  height: auto;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Profile = styled(Avatar)`
  width: 8rem;
  height: 8rem;
`;

export const Category = styled(Chip)`
  color: white;
`;

export const PostType = styled(Chip)`
  color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  row-gap: 0.5rem;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  margin: 0;
`;

export const UserName = styled.p`
  /* color: rgba(0, 0, 0, 0.6); */
  font-size: 1.4rem;
  margin: 0;
`;

export const Date = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
  margin: 0;
`;

export const CenterTopContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const CenterBottomContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const PeopleCount = styled.div`
  font-size: 1.5rem;
`;

export const FullPeopleCount = styled.div`
  text-align: center;
  width: 4rem;
  height: 2rem;
  background-color: #ff6f61;
  border-radius: 1rem;
  color: white;
  font-size: 1.5rem;
`;

export const StartDate = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

export const EndDate = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;
