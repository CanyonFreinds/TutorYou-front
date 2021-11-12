import React from 'react';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as Style from './styled';

const ariaLabel = { 'aria-label': 'description' };

function Login() {
  return (
    <Style.Div>
      <h1>로그인</h1>
      <br />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: 400, maxWidth: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Style.TextField
          required
          fullWidth
          variant="standard"
          label="e-mail"
          placeholder="E-mail을 입력해주세요"
          type="email"
        />
        <br />
        <br />
        <Style.TextField
          required
          variant="standard"
          label="password"
          placeholder="Password"
          type="password"
          inputProps={ariaLabel}
        />
      </Box>
      <Style.Button size="large" variant="contained" href="#contained-buttons">
        로그인
      </Style.Button>
      <Style.Button size="large" variant="contained" href="Signup">
        회원가입하기
      </Style.Button>
      <br />

      <Style.Button>
        <GitHubIcon fontSize="large" htmlColor="black" />
      </Style.Button>
      <Style.Button>
        <GoogleIcon fontSize="large" htmlColor="black" />
      </Style.Button>
    </Style.Div>
  );
}

export default Login;
