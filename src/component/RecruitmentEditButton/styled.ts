import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

export const Container = styled(Fab)`
  position: fixed;
  background-color: #4299E1;
  right: 7rem;
  bottom: 0;
  margin: 3rem;

  :hover {
    background-color: #4299E188;
  }
`;

export const Icon = styled(EditIcon)`
  color: white;
`;

export const TextTooltip = styled(Tooltip)`
`;

export const Text = styled(Typography)`
`;

export const MUIModal = styled(Modal)`
`;

export const MUIBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: white;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  margin-top: 2rem;
  column-gap: 3rem;
`;

export const MUIButton = styled(Button)`
  width: 10rem;
  font-size: 1.8rem;
  height: 3rem;
`;
