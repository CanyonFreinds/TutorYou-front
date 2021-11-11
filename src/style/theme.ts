import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    main: Palette['primary'];
  }

  interface PaletteOptions {
    main?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    main: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61',
    },
  },
});
