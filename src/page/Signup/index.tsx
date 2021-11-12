import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import CareerItem from '../../component/Signup';

import * as Style from './styled';

interface CareerType {
  type: string;
  value: string;
  careerArr: string[];
}

export default function Signup() {
  const [info, setInfo] = useState<CareerType>({
    type: '',
    value: '',
    careerArr: [],
  });

  const [value, setValue] = React.useState('student');
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass2, setPass2] = React.useState('');
  const addCareer = (input: string) => {
    if (input.length === 0) {
      alert('경력을 입력해주세요.');
      return;
    }
    if (info.careerArr.includes(input)) {
      alert('중복된 입력입니다.');
      return;
    }
    setInfo({ ...info, careerArr: [...info.careerArr, input] });
  };

  const deleteCareer = (input: string) => {
    const filteredCareer = info.careerArr.filter((career) => career !== input);
    setInfo({ ...info, careerArr: filteredCareer });
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const onChangepass = (event: any) => {
    setPass(event.target.value);
  };

  const onChangepass2 = (event: any) => {
    setPass2(event.target.value);
  };

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const checkPasswordIsSame = () => {
    if (email.length === 0) {
      alert('이메일을 입력해주세요');
    } else if (pass.length === 0 || pass2.length === 0) {
      alert('비밀번호를 입력해주세요.');
    } else if (pass !== pass2) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const checkEmailValidation = () => {
    const regEmail = /^([0-9a-zA-Z_\\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (email.length === 0) {
      alert('이메일을 입력하세요.');
    } else if (!regEmail.test(email)) {
      alert('이메일 형식이 일치하지 않습니다.');
    } else {
      alert('유효한 이메일입니다.');
    }
  };

  return (
    <FormControl required fullWidth sx={{ m: 1 }}>
      <Style.Div>
        {value === 'teacher' && <h1>선생님 회원가입</h1>}
        {value === 'student' && <h1>학생 회원가입</h1>}
        {value === 'admin' && <h1>관리자 회원가입</h1>}
        <FormControl component="fieldset">
          <RadioGroup row defaultValue="student" onChange={handleChange} value={value}>
            <FormControlLabel value="student" control={<Radio />} label="학생" />
            <FormControlLabel value="teacher" control={<Radio />} label="선생님" />
            <FormControlLabel value="admin" control={<Radio />} label="관리자" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Style.Aligndiv>
            <Style.Label htmlFor="email">이메일을 입력하세요.</Style.Label>
            <br />
            <Style.TextField
              id="email"
              name="email"
              label="email"
              placeholder="E-mail을 입력해주세요"
              type="email"
              variant="standard"
              required
              onChange={onChangeEmail}
            />
          </Style.Aligndiv>
          <br />
          <Button onClick={checkEmailValidation}>이메일 중복 검사</Button>
          <br />
          <Style.Aligndiv>
            <Style.Label htmlFor="password">비밀번호를 입력하세요.</Style.Label>
            <br />
            <Style.TextField
              id="password"
              name="password"
              label="password"
              required
              placeholder="몇 자 이상의 비밀번호를 입력해주세요"
              type="password"
              variant="standard"
              onChange={onChangepass}
            />
          </Style.Aligndiv>
          <br />
          <Style.Aligndiv>
            <Style.Label htmlFor="confirmpassword">비밀번호를 다시 입력해주세요</Style.Label>
            <br />
            <Style.TextField
              id="confirmpassword"
              name="password2"
              label="password"
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              variant="standard"
              required
              onChange={onChangepass2}
            />
          </Style.Aligndiv>
          <br />
          <br />
        </Box>
        {value === 'teacher' && (
          <Style.CareerDiv>
            <CareerItem values={info.careerArr} addItem={addCareer} deleteItem={deleteCareer} />
          </Style.CareerDiv>
        )}
        <br />
        <Style.Button type="submit" onClick={checkPasswordIsSame} variant="contained">
          가입하기
        </Style.Button>
      </Style.Div>
    </FormControl>
  );
}
