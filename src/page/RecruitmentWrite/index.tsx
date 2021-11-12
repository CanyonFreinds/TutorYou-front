/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, ChangeEvent, useEffect } from 'react';
import DatePicker, { registerLocale }  from "react-datepicker";
import ko from 'date-fns/locale/ko';
import * as Style from './styled';

import MarkdownEditor from '../../component/MarkdownEditor';

registerLocale('ko', ko);

interface InitialValue {
  title: string;
  startDate: Date;
  endDate: Date;
  categoryName: string;
  postType: string;
  totalStudentCount: number;
  content: string;
} 

const initialValues = {
  title: '',
  startDate: new Date(),
  endDate: new Date(),
  categoryName: '국어',
  postType: '1:1',
  totalStudentCount: 1,
  content: '',
}

function RecruitmentWrite() {
  const [values, setValues] = useState<InitialValue>(initialValues);

  useEffect(() => {
    if (values.postType === '1:1') setValues({ ...values, totalStudentCount: 1 });
  }, [values.postType]);

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onChangeStartDate = (date: Date) => {
    setValues({ ...values, startDate: date });
  };

  const onChangeEndDate = (date: Date) => {
    setValues({ ...values, endDate: date });
  };

  const onChangePostType = (event: any) => {
    setValues({ ...values, postType: event.target.value });
  };

  const onChangeCategoryName = (event: any) => {
    setValues({ ...values, categoryName: event.target.value });
  };

  const onChangeTotalStudentCount = (event: any) => {
    if (event.target.value < 1) return;
    setValues({ ...values, totalStudentCount: Number(event.target.value) });
  };

  const onChangeContent = (content: string) => {
    setValues({ ...values, content });
  }; 

  // Todo: API 연동
  // Todo: 회원 정보도 받아 와야함
  const onSubmitForm = (event: any) => {
    event.preventDefault();
  };

  return (
    <Style.Container>
      <Style.Form onSubmit={onSubmitForm}>
        <Style.TitleInput
          name="title"
          value={values.title}
          onChange={onChangeTextField}
          variant="standard"
          label="제목"
          inputProps={{ style: { fontSize: '3rem' } }}
          InputLabelProps={{ style: { fontSize: '2rem' } }}
          placeholder="제목을 입력해주세요"
          required
        />

        <Style.Selects>
          <Style.PostTypeSelectContainer>
            <Style.SelectLabel htmlFor="postType">과외 타입</Style.SelectLabel>
            <Style.SelectContainer
              id="postType"
              value={values.postType}
              variant="standard"
              onChange={onChangePostType}
            >
              <Style.SelectMenuItem value="1:1">1:1</Style.SelectMenuItem>
              <Style.SelectMenuItem value="1:M">1:M</Style.SelectMenuItem>
            </Style.SelectContainer>
          </Style.PostTypeSelectContainer>

          <Style.PostTypeSelectContainer>
            <Style.SelectLabel htmlFor="categoryName">과외 분야</Style.SelectLabel>
            <Style.SelectContainer
              id="categoryName"
              value={values.categoryName}
              variant="standard"
              onChange={onChangeCategoryName}
            >
              <Style.SelectMenuItem value="국어">국어</Style.SelectMenuItem>
              <Style.SelectMenuItem value="수학">수학</Style.SelectMenuItem>
              <Style.SelectMenuItem value="영어">영어</Style.SelectMenuItem>
              <Style.SelectMenuItem value="사회">사회</Style.SelectMenuItem>
              <Style.SelectMenuItem value="화학">화학</Style.SelectMenuItem>
              <Style.SelectMenuItem value="지구과학">지구과학</Style.SelectMenuItem>
              <Style.SelectMenuItem value="물리">물리</Style.SelectMenuItem>
              <Style.SelectMenuItem value="생물">생물</Style.SelectMenuItem>
              <Style.SelectMenuItem value="코딩">코딩</Style.SelectMenuItem>
            </Style.SelectContainer>
          </Style.PostTypeSelectContainer>

          <Style.PostTypeSelectContainer>
            <Style.TotalStudentCountInput
              value={values.totalStudentCount}
              variant="standard"
              InputLabelProps={{ style: { fontSize: '2rem' } }}
              inputProps={{ style: { fontSize: '2rem' } }}
              label="모집 인원"
              onChange={onChangeTotalStudentCount}
              type="number"
              disabled={values.postType === '1:1'}
            /> 
          </Style.PostTypeSelectContainer>
        </Style.Selects>

        <Style.DatePickerContainer>
          <Style.DateContainerWithLabel>
            <Style.DatePickerLabel>
              과외 시작 날짜
            </Style.DatePickerLabel>
            <DatePicker
              selected={values.startDate}
              onChange={onChangeStartDate}
              dateFormat="yyyy년 MM월 dd일"
              locale="ko"
            />
          </Style.DateContainerWithLabel>
          <Style.DateCenterDivide>
            -
          </Style.DateCenterDivide>
          <Style.DateContainerWithLabel>
            <Style.DatePickerLabel>
              과외 종료 날짜
            </Style.DatePickerLabel>
            <DatePicker
              selected={values.endDate}
              onChange={onChangeEndDate}
              dateFormat="yyyy년 MM월 dd일"
              locale="ko"
            />
          </Style.DateContainerWithLabel>
        </Style.DatePickerContainer>

        <MarkdownEditor onChange={onChangeContent} />
        <Style.SubmitButton
          type="submit"
          variant="contained"
        >
          작성하기
        </Style.SubmitButton>
      </Style.Form>
    </Style.Container>
  );
}

export default RecruitmentWrite;
