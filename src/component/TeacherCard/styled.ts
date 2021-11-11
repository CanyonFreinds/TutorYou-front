import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import MaterialStarIcon from '@mui/icons-material/Star';

export const Container = styled.div`
  width: 40rem;
  height: 22rem;
  display: flex;
  padding: 2rem;
  position: relative;

  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  vertical-align: middle;
  border-radius: 60px;
`;

export const Right = styled.div`
  padding-left: 2rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  border-right: 1px solid #d0d0d0;
`;

export const Name = styled.span`
  font-size: 2.1rem;
  font-weight: bold;
`;

export const StarWrapper = styled.div`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.6rem;
`;

export const StarIcon = styled(MaterialStarIcon)`
  color: #f0b24b;
  font-size: 2rem;
`;

export const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  width: 150px;
  height: 155px;
  overflow: auto;
`;

export const InfoItem = styled.li`
  margin-top: 0.5rem;
`;

export const Carrier = styled.span`
  display: block;
  font-size: 1.2rem;
`;

export const CategoryName = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ChatButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 2.4rem;
  font-size: 1.3rem;
`;
