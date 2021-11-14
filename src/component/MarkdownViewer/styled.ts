import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 1.8rem;
  img {
    max-width: 100rem;
    transition: all 0.3s ease;
    border: 1px solid #fefefe;

    :hover {
      transform: scale(1.005);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;
