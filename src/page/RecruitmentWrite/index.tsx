/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, ChangeEvent, useEffect, useContext } from 'react';
import DatePicker, { registerLocale }  from "react-datepicker";
import { useHistory, useLocation } from "react-router-dom";
import moment from 'moment';
import ko from 'date-fns/locale/ko';

import * as Style from './styled';
import { postRecruitmentAPI, putRecruitmentAPI } from '../../api/recruitment';
import MarkdownEditor from '../../component/MarkdownEditor';
import { buildRecruitmentPath } from '../../Routes';
import { useRecruitmentPostContext } from '../../context/RecruitmentPostContext';
import { userStateContext } from '../../context/UserContext';

registerLocale('ko', ko);

interface LocationProps {
  isEdit: boolean;
  postId: number;
}

const DATE_FORMAT = 'yyyy-MM-DD';

function RecruitmentWrite() {
  const [title, setTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(moment().toDate());
  const [endDate, setEndDate] = useState<Date>(moment().toDate());
  const [categoryName, setCategoryName] = useState<string>('국어');
  const [postType, setPostType] = useState<string>('ONE_TO_ONE');
  const [totalStudentCount, setTotalStudentCount] = useState<number>(1);
  const [content, setContent] = useState<string>('');
  const { setCurrentPost, currentPost }: any = useRecruitmentPostContext();
  const { state } = useContext(userStateContext);
  const history = useHistory();
  const location = useLocation<LocationProps>();

  useEffect(() => {
    if (!state.userId) {
      // 토스트 연결
      console.log('로그인이 되어있지 않습니다.');
    }
  }, []);

  useEffect(() => {
    if (!location.state) {
      setTitle('');
      setStartDate(moment().toDate());
      setEndDate(moment().toDate());
      setCategoryName('국어');
      setPostType('ONE_TO_ONE');
      setTotalStudentCount(1);
      setContent('');
      return;
    }

    setTitle(currentPost.title);
    setStartDate(moment(currentPost.startDate).toDate());
    setEndDate(moment(currentPost.endDate).toDate());
    setCategoryName(currentPost.categoryName);
    setPostType(currentPost.postType);
    setTotalStudentCount(currentPost.totalStudentCount);
    setContent(currentPost.content);
  }, []);

  useEffect(() => {
    if (postType === 'ONE_TO_ONE') setTotalStudentCount(1);
  }, [postType]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeStartDate = (date: Date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date: Date) => {
    setEndDate(date);
  };

  const onChangePostType = (event: any) => {
    setPostType(event.target.value)
  };

  const onChangeCategoryName = (event: any) => {
    setCategoryName(event.target.value);
  };

  const onChangeTotalStudentCount = (event: any) => {
    if (event.target.value < 1) return;
    setTotalStudentCount(Number(event.target.value));
  };

  const onChangeContent = (content: string) => {
    setContent(content);
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();

    const sumbitObject = {
      categoryName,
      content,
      endDate: moment(endDate).format(DATE_FORMAT),
      postType,
      startDate: moment(startDate).format(DATE_FORMAT),
      title,
      totalStudentCount,
      userId: state.userId,
    }

    let response = null;

    if (location.state) {
      response = await putRecruitmentAPI({ postId: location.state.postId, postRequest: sumbitObject });
    } else {
      response = await postRecruitmentAPI(sumbitObject);
    }
    
    if (response) {
      setCurrentPost(response);
      history.replace(buildRecruitmentPath(response.postId));
    }
  };

  return (
    <Style.Container>
      <Style.Form onSubmit={onSubmitForm}>
        <Style.TitleInput
          name="title"
          value={title}
          onChange={onChangeTitle}
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
              value={postType}
              variant="standard"
              onChange={onChangePostType}
            >
              <Style.SelectMenuItem value="ONE_TO_ONE">ONE_TO_ONE</Style.SelectMenuItem>
              <Style.SelectMenuItem value="ONE_TO_MANY">ONE_TO_MANY</Style.SelectMenuItem>
            </Style.SelectContainer>
          </Style.PostTypeSelectContainer>

          <Style.PostTypeSelectContainer>
            <Style.SelectLabel htmlFor="categoryName">과외 분야</Style.SelectLabel>
            <Style.SelectContainer
              id="categoryName"
              value={categoryName}
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
              value={totalStudentCount}
              variant="standard"
              InputLabelProps={{ style: { fontSize: '2rem' } }}
              inputProps={{ style: { fontSize: '2rem' } }}
              label="모집 인원"
              onChange={onChangeTotalStudentCount}
              type="number"
              disabled={postType === 'ONE_TO_ONE'}
            /> 
          </Style.PostTypeSelectContainer>
        </Style.Selects>

        <Style.DatePickerContainer>
          <Style.DateContainerWithLabel>
            <Style.DatePickerLabel>
              과외 시작 날짜
            </Style.DatePickerLabel>
            <DatePicker
              selected={startDate}
              onChange={onChangeStartDate}
              dateFormat='yyyy년 MM월 dd일'
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
              selected={endDate}
              onChange={onChangeEndDate}
              dateFormat='yyyy년 MM월 dd일'
              locale="ko"
            />
          </Style.DateContainerWithLabel>
        </Style.DatePickerContainer>

        <MarkdownEditor initialValue={currentPost.content} onChange={onChangeContent} />
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
