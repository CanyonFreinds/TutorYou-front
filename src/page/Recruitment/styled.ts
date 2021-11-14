import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  height: 100%; // 헤더 height를 뺐습니다.
  width: 100rem;
`;

export const Title = styled.p`
  font-size: 4rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const MidContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 1rem;
  margin: 0;
`;

export const UserName = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const CreatedAt = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const TextChip = styled(Chip)`
  font-size: 1.7rem;
  color: white;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 1rem;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const DateComment = styled.span`
  font-size: 1.5rem;
  color: #ff6f61;
  margin: 0 0.5rem;
`;

export const MarkdownContainer = styled.div`
  margin: 3rem 0;
`;
