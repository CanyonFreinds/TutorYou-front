/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import signUp from '../../api/signupAPI';
import CareerItem from '../../component/Signup';
import checkEmail from '../../api/checkemail';

import * as Style from './styled';

interface CareerType {
  type: string;
  value: string;
  careerArr: string[];
}
interface CareerFormType {
  content: string;
  careerType: string;
}

export default function Signup() {
  const [info, setInfo] = useState<CareerType>({
    type: '',
    value: '',
    careerArr: [],
  });
  const [signupCarArr, setSignupCarArr] = useState<CareerFormType[]>([]);

  const [value, setValue] = useState('ROLE_STUDENT');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass2, setPass2] = useState('');
  const [emailvalid, setEmailValid] = useState(false);
  const [careerType, setCareerType] = useState('EDUCATION_LEVEL');

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
    setSignupCarArr([...signupCarArr, { content: input, careerType: careerType }]);
  };
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const deleteCareer = (input: string) => {
    const filteredCareer = info.careerArr.filter((career) => career !== input);
    setInfo({ ...info, careerArr: filteredCareer });
  };
  const handleChangeCareer = (event: any) => {
    setCareerType(event.target.value);
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

  const checkFormValidation = () => {
    if (email.length === 0) {
      alert('이메일을 입력해주세요');
    } else if (!emailvalid) {
      alert('이메일 중복을 검사해주세요.');
    } else if (name.length === 0) {
      alert('아이디를 입력해주세요.');
    } else if (pass.length === 0) {
      alert('비밀번호를 입력해주세요.');
    } else if (pass2.length === 0) {
      alert('비밀번호 확인을 해주세요');
    } else if (pass !== pass2) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      signUp(email, name, pass, value, signupCarArr);
    }
  };

  const checkEmailValidation = () => {
    const regEmail = /^([0-9a-zA-Z_\\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (email.length === 0) {
      alert('이메일을 입력하세요.');
    } else if (!regEmail.test(email)) {
      alert('이메일 형식이 일치하지 않습니다.');
    } else {
      checkEmail(email);
      setEmailValid(true);
    }
  };

  return (
    <FormControl required fullWidth sx={{ m: 1 }}>
      <Style.Div>
        {value === 'ROLE_TEACHER' && <h1 style={{ fontSize: 'xx-large' }}>선생님 회원가입</h1>}
        {value === 'ROLE_STUDENT' && <h1 style={{ fontSize: 'xx-large' }}>학생 회원가입</h1>}
        {value === 'ROLE_ADMIN' && <h1 style={{ fontSize: 'xx-large' }}>관리자 회원가입</h1>}
        <FormControl component="fieldset">
          <RadioGroup row defaultValue="ROLE_STUDENT" onChange={handleChange}>
            <FormControlLabel value="ROLE_STUDENT" control={<Radio />} label="학생" />
            <FormControlLabel value="ROLE_TEACHER" control={<Radio />} label="선생님" />
            <FormControlLabel value="ROLE_ADMIN" control={<Radio />} label="관리자" />
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
              inputProps={{ style: { fontSize: '2rem' } }}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
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
          <Button id="emailBtn" onClick={checkEmailValidation}>
            이메일 중복 검사
          </Button>
          <br />
          <Style.Aligndiv>
            <Style.Label htmlFor="name">아이디를 입력하세요.</Style.Label>
            <br />
            <Style.TextField
              inputProps={{ style: { fontSize: '2rem' } }}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
              id="name"
              name="name"
              label="id"
              placeholder="사용하실 아이디를 입력해주세요."
              variant="standard"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Style.Aligndiv>
          <br />
          <Style.Aligndiv>
            <Style.Label htmlFor="password">비밀번호를 입력하세요.</Style.Label>
            <br />
            <Style.TextField
              inputProps={{ style: { fontSize: '2rem' } }}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
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
              inputProps={{ style: { fontSize: '2rem' } }}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
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
          <br />
        </Box>
        {value === 'ROLE_TEACHER' && (
          <Style.CareerDiv>
            <FormControl component="fieldset">
              <RadioGroup row onChange={handleChangeCareer} defaultValue="EDUCATION_LEVEL">
                <FormControlLabel value="EDUCATION_LEVEL" control={<Radio />} label="학력" />
                <FormControlLabel value="PRIZE_EXP" control={<Radio />} label="수상경력" />
                <FormControlLabel value="TUTOR_EXP" control={<Radio />} label="과외경력" />
              </RadioGroup>
            </FormControl>
            <br />
            <CareerItem careers={info.careerArr} addItem={addCareer} deleteItem={deleteCareer} />
          </Style.CareerDiv>
        )}
        <br />
        <Style.Button type="submit" onClick={checkFormValidation} variant="contained">
          가입하기
        </Style.Button>
      </Style.Div>
    </FormControl>
  );
}
