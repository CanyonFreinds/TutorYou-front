import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

interface NavItemProps {
  selected: boolean;
}

export const Container = styled.main`
  width: 1000px;
  margin: 0 auto;
  margin-top: 5rem;
  padding-bottom: 10rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ProfileList = styled.ul`
  width: 100%;
  height: 90%;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const ProfileItem = styled.li`
  margin: 0 1rem 3rem 1rem;
`;

export const SearchBox = styled.div``;

export const Search = styled(Input)`
  width: 200px;
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

export const SearchButton = styled(Button)`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.span<NavItemProps>`
  font-size: 1.6rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#ff6f61' : '#000')};
`;
