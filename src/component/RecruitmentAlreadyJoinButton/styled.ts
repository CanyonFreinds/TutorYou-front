import styled from '@emotion/styled';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';

export const Container = styled(Fab)`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 3rem;
  background-color: #68D391;

  :hover {
    background-color: #68D39188;
  }
`;

export const Icon = styled(CheckIcon)`
  color: white;
`;

export const TextTooltip = styled(Tooltip)`
`;
