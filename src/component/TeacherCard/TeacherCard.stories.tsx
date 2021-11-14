import React from 'react';
import { action } from '@storybook/addon-actions';
import { ProfileType } from '../../api/user';
import TeacherCard from '.';

export default {
  title: 'TeacherCard',
  component: TeacherCard,
};

const chatAction = action('start chat');
const dummyProfile: ProfileType = {
  id: 1,
  name: '조개소년',
  point: 4.7,
  studentCount: 10,
  imageSrc: 'https://avatars.githubusercontent.com/u/26402298?v=4',
  role: ['ROLE_TEACHER'],
  careers: [
    { careerId: 1, content: 'hello', careerType: 'EDUCATION_LEVEL' },
    { careerId: 1, content: 'hello', careerType: 'EDUCATION_LEVEL' },
  ],
};

export const teacherCard = () => <TeacherCard profile={dummyProfile} startChatting={chatAction} />;
