import React, { useState } from 'react';
import * as Style from './styled';
import CareerItem from '../../component/CareerItem';
import ProfileImage from '../../component/ProfileImage';

type SortType = 'Teacher' | 'Student' | 'Admin' | 'None';

interface ProfileType {
  sort: SortType;
  nickname: string;
  imageSrc: string;
  schoolCareer: string[];
  awardCareer: string[];
  tutorCareer: string[];
}

function Profile() {
  const [info, setInfo] = useState<ProfileType>({
    sort: 'None',
    nickname: '',
    imageSrc: '',
    schoolCareer: [],
    awardCareer: [],
    tutorCareer: [],
  });

  const changeImage = () => {};

  const addSchoolCareer = (value: string) => {
    if (value.length < 5 || info.schoolCareer.includes(value)) return;
    setInfo({ ...info, schoolCareer: [...info.schoolCareer, value] });
  };

  const addAwardCareer = (value: string) => {
    if (value.length < 5 || info.awardCareer.includes(value)) return;
    setInfo({ ...info, awardCareer: [...info.awardCareer, value] });
  };

  const addTutorCareer = (value: string) => {
    if (value.length < 5 || info.tutorCareer.includes(value)) return;
    setInfo({ ...info, tutorCareer: [...info.tutorCareer, value] });
  };

  const deleteSchoolCareer = (value: string) => {
    const filteredCareer = info.schoolCareer.filter((career) => career !== value);
    setInfo({ ...info, schoolCareer: filteredCareer });
  };

  const deleteAwardCareer = (value: string) => {
    const filteredCareer = info.awardCareer.filter((career) => career !== value);
    setInfo({ ...info, awardCareer: filteredCareer });
  };

  const deleteTutorCareer = (value: string) => {
    const filteredCareer = info.tutorCareer.filter((career) => career !== value);
    setInfo({ ...info, tutorCareer: filteredCareer });
  };

  return (
    <Style.Container>
      <Style.Header>
        <ProfileImage imageSrc={info.imageSrc} changeImage={changeImage} />
        <Style.Nickname>{info.nickname}</Style.Nickname>
        선생님 안녕하세요. 👋
      </Style.Header>
      <Style.ButtonWrapper>
        <Style.ModifyButton variant="outlined">비밀번호 변경</Style.ModifyButton>
        <Style.ModifyButton variant="contained">회원 탈퇴</Style.ModifyButton>
      </Style.ButtonWrapper>
      {info.sort === 'Teacher' && (
        <Style.CareerList>
          <Style.CareerItem>
            <CareerItem
              title="학력"
              values={info.schoolCareer}
              addItem={addSchoolCareer}
              deleteItem={deleteSchoolCareer}
            />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="수상 경력"
              values={info.awardCareer}
              addItem={addAwardCareer}
              deleteItem={deleteAwardCareer}
            />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="과외 경력"
              values={info.tutorCareer}
              addItem={addTutorCareer}
              deleteItem={deleteTutorCareer}
            />
          </Style.CareerItem>
        </Style.CareerList>
      )}
    </Style.Container>
  );
}

export default Profile;
