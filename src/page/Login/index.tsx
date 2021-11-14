import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as Style from './styled';
import { loginAPI } from '../../api/loginAPI';
import { getGroupsAPI, GroupType } from '../../api/group';
import { userStateContext } from '../../context/UserContext';
import { showToast } from '../../component/Toast';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const { dispatch } = useContext(userStateContext);

  const login = async () => {
    if (email === '' || pwd === '') {
      window.alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      const result = await loginAPI({ email, password: pwd });
      if (result && dispatch) {
        dispatch({ type: 'login', payload: result });
        history.push('/');

        const response: any = await getGroupsAPI({ userId: result.userId });
        const groupIds: number[] = [];

        if (result.role[0] === 'ROLE_TEACHER') {
          response.forEach((group: GroupType) => {
            if (group.teacherName === result.name) {
              groupIds.push(group.groupId);
            }
          });

          const customResponse = {
            ...response,
            studentGroups: [],
            teacherGroups: groupIds,
          };
  
          dispatch({ type: 'getTeacherGroups', payload: customResponse });

        } else if (result.role[0] === 'ROLE_STUDENT') {
          response.forEach((group: GroupType) => {
            if (group.studentNames.includes(result.name)) {
              groupIds.push(group.groupId);
            }
          });

          const customResponse = {
            ...response,
            studentGroups: groupIds,
            teacherGroups: [],
          };
  
          dispatch({ type: 'getStudentGroups', payload: customResponse });
        }

        showToast('로그인 되었습니다.');
      }
    }
  };
  const theme = {
    fontSize: 'x-large',
  };

  return (
    <Style.Div>
      <h1 style={{ fontSize: 'xx-large' }}>로그인</h1>
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
          inputProps={{ style: { fontSize: '2.5rem' } }}
          InputLabelProps={{ style: { fontSize: '2rem' } }}
          required
          fullWidth
          variant="standard"
          label="e-mail"
          placeholder="E-mail을 입력해주세요"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />
        <br />
        <Style.TextField
          inputProps={{ style: { fontSize: '2.5rem' } }}
          InputLabelProps={{ style: { fontSize: '2rem' } }}
          theme={theme}
          required
          variant="standard"
          label="password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </Box>
      <Style.Button color="info" onClick={login} size="large" variant="contained">
        로그인
      </Style.Button>
      <Style.Button size="large" variant="contained" href="signup">
        회원가입하기
      </Style.Button>
    </Style.Div>
  );
}

export default Login;
