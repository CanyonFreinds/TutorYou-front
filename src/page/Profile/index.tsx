import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import * as Style from './styled';
import CareerItem from '../../component/CareerItem';
import ProfileImage from '../../component/ProfileImage';
import { addUserCareerAPI, deleteUserCareerapi } from '../../api/career';
import { updateUserImageAPI, changePasswordAPI, deleteUserAPI, ProfileType } from '../../api/user';
import { userStateContext } from '../../context/UserContext';

function Profile() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [beforePassword, setBeforePassword] = useState('');
  const [afterPassword, setAfterPassword] = useState('');
  const { state } = useContext(userStateContext);
  const [info, setInfo] = useState<ProfileType>({
    id: 1,
    name: 'string',
    point: 1.2,
    studentCount: 12,
    imageSrc: 'string',
    role: [],
    careers: [],
  });

  const toggleModal = () => {
    setOpen(!open);
  };

  const changeImage = async (formData: FormData) => {
    const result = await updateUserImageAPI({ formData, userId: state.userId });
    if (result) {
      setInfo({ ...info, imageSrc: result });
    }
  };

  const addSchoolCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: state.userId, careerType: 'EDUCATION_LEVEL', content: value });
    if (result) {
      setInfo({
        ...info,
        careers: [...info.careers, { careerId: result.careerId, content: value, careerType: 'EDUCATION_LEVEL' }],
      });
    }
  };

  const addAwardCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: state.userId, careerType: 'PRIZE_EXP', content: value });
    if (result) {
      setInfo({
        ...info,
        careers: [...info.careers, { careerId: result.careerId, content: value, careerType: 'PRIZE_EXP' }],
      });
    }
  };

  const addTutorCareer = async (value: string) => {
    if (value.length < 5) return;
    const result = await addUserCareerAPI({ userId: state.userId, careerType: 'TUTOR_EXP', content: value });
    if (result) {
      setInfo({
        ...info,
        careers: [...info.careers, { careerId: result.careerId, content: value, careerType: 'TUTOR_EXP' }],
      });
    }
  };

  const deleteCareer = async (id: number) => {
    const filteredCareer = info.careers.filter((career) => career.careerId !== id);
    const result = await deleteUserCareerapi({ userId: state.userId, careerId: '' });
    if (result) {
      setInfo({ ...info, careers: filteredCareer });
    }
  };

  const removeUser = async () => {
    const result = await deleteUserAPI({ userId: state.userId });
    if (result) {
      history.push('/');
    }
  };

  const changePassword = async () => {
    await changePasswordAPI({ userId: state.userId, beforePassword, afterPassword });
  };

  return (
    <Style.Container>
      <Modal open={open} onClose={toggleModal}>
        <Style.ModalBox>
          <Style.PasswordInput
            value={beforePassword}
            placeholder="이전 비밀번호"
            onChange={(event) => setBeforePassword(event.target.value)}
          />
          <Style.PasswordInput
            value={afterPassword}
            placeholder="바꿀 비밀번호"
            onChange={(event) => setAfterPassword(event.target.value)}
          />
          <Style.ChangeButton onClick={changePassword}>변경하기</Style.ChangeButton>
        </Style.ModalBox>
      </Modal>
      <Style.Header>
        <ProfileImage imageSrc={info.imageSrc} changeImage={changeImage} />
        <Style.Nickname>{info.name}</Style.Nickname>
        선생님 안녕하세요. 👋
      </Style.Header>
      <Style.ButtonWrapper>
        <Style.ModifyButton variant="outlined" onClick={toggleModal}>
          비밀번호 변경
        </Style.ModifyButton>
        <Style.ModifyButton variant="contained" onClick={removeUser}>
          회원 탈퇴
        </Style.ModifyButton>
      </Style.ButtonWrapper>
      {info.role[0] === 'ROLE_TEACHER' && (
        <Style.CareerList>
          <Style.CareerItem>
            <CareerItem
              title="학력"
              values={info.careers.filter((career) => career.careerType === 'EDUCATION_LEVEL')}
              addItem={addSchoolCareer}
              deleteItem={deleteCareer}
            />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="수상 경력"
              values={info.careers.filter((career) => career.careerType === 'PRIZE_EXP')}
              addItem={addAwardCareer}
              deleteItem={deleteCareer}
            />
          </Style.CareerItem>
          <Style.CareerItem>
            <CareerItem
              title="과외 경력"
              values={info.careers.filter((career) => career.careerType === 'TUTOR_EXP')}
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
