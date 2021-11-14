import styled from '@emotion/styled';

export const Container = styled.main`
  width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const GroupList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const GroupItem = styled.li`
  margin: 0 1rem 2rem 1rem;
`;

export const Error = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`;
