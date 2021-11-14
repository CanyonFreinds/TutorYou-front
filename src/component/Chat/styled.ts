import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export const Container = styled.div`
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  padding: 1rem 2rem;
  height: auto;
  width: 90%;
  margin: 15px;

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
  margin-left: 50px;
`;

export const UserName = styled.p`
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

export const BalloonDiv = styled.div``;
