import React from 'react';
import { action } from '@storybook/addon-actions';
import TeacherCard, { ProfileType } from '.';

export default {
  title: 'TeacherCard',
  component: TeacherCard,
};

const chatAction = action('start chat');
const dummyProfile: ProfileType = {
  nickname: '조개소년',
  star: 4.7,
  studentCount: 10,
  imageSrc: 'https://avatars.githubusercontent.com/u/26402298?v=4',
  schoolCareer: ['dfdf', 'assa'],
  awardCareer: ['sdf', 'asdfdsa'],
  tutorCareer: ['asdf', 'asddf', 'asdff', 'ff'],
};

export const teacherCard = () => <TeacherCard profile={dummyProfile} startChatting={chatAction} />;
