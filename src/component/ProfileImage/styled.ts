import styled from '@emotion/styled';
import MaterialCreateIcon from '@mui/icons-material/Create';

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10rem;
  object-fit: scale-down;
`;

export const DummyImage = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10rem;
  background-color: #555;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Label = styled.label`
  position: absolute;
  bottom: 1.4rem;
  display: flex;
  align-items: bottom;
  justify-content: space-between;
  height: 1.8rem;
  width: 4rem;
  padding: 4px 8px;

  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

export const PencilIcon = styled(MaterialCreateIcon)`
  font-size: 1rem;
`;
