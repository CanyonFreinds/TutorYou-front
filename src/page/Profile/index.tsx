import React, { useState } from 'react';
import * as Style from './styled';
import CareerItem, { CareerType } from '../../component/CareerItem';
import ProfileImage from '../../component/ProfileImage';
import { addUserCareerAPI, deleteUserCareerapi } from '../../api/career';
import { updateUserImageAPI } from '../../api/user';

type SortType = 'Teacher' | 'Student' | 'Admin' | 'None';

interface ProfileType {
  sort: SortType;
  nickname: string;
  imageSrc: string;
  schoolCareer: CareerType[];
  awardCareer: CareerType[];
  tutorCareer: CareerType[];
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

  const changeImage = async (formData: FormData) => {
    const result = await updateUserImageAPI({ formData, userId: '' });
    if (result) {
      setInfo({ ...info, imageSrc: result });
    }
  };

  const addSchoolCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: '', careerType: 'EDUCATION_LEVEL', content: value });
    if (result) {
      setInfo({ ...info, schoolCareer: [...info.schoolCareer, { careerId: result.careerId, content: value }] });
    }
  };

  const addAwardCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: '', careerType: 'PRIZE_EXP', content: value });
    if (result) {
      setInfo({ ...info, awardCareer: [...info.awardCareer, { careerId: result.careerId, content: value }] });
    }
  };

  const addTutorCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: '', careerType: 'TUTOR_EXP', content: value });
    if (result) {
      setInfo({ ...info, tutorCareer: [...info.tutorCareer, { careerId: result.careerId, content: value }] });
    }
  };

  const deleteCareer = async (id: string) => {
    const filteredCareer = info.schoolCareer.filter((career) => career.careerId !== id);
    const result = await deleteUserCareerapi({ userId: '', careerId: '' });
    if (result) {
      setInfo({ ...info, schoolCareer: filteredCareer });
    }
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
            <CareerItem title="학력" values={info.schoolCareer} addItem={addSchoolCareer} deleteItem={deleteCareer} />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="수상 경력"
              values={info.awardCareer}
              addItem={addAwardCareer}
              deleteItem={deleteCareer}
            />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="과외 경력"
              values={info.tutorCareer}
              addItem={addTutorCareer}
              deleteItem={deleteCareer}
            />
          </Style.CareerItem>
        </Style.CareerList>
      )}
    </Style.Container>
  );
}

export default Profile;
