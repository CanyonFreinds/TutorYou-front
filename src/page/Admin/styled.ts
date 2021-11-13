import styled from '@emotion/styled';
import NativeSelect from '@mui/material/NativeSelect';

interface TitleProps {
  selected: boolean;
}

export const Container = styled.main`
  width: 1000px;
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const Left = styled.div`
  width: 50%;
  padding: 0 2rem;
  border-right: 1px solid #f0f0f0;
`;

export const Right = styled.div`
  width: 50%;
  padding: 0 2rem;
  border-left: 1px solid #f0f0f0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Title = styled.h2<TitleProps>`
  display: inline-block;
  width: 200px;
  text-align: center;
  margin: 0;
  margin-right: 3rem;
  font-size: 2.5rem;
  color: ${(props) => (props.selected ? '#ff6f61' : '#000')};
`;

export const CardList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardItem = styled.li`
  margin-bottom: 6rem;
`;

export const Dropdown = styled(NativeSelect)``;
