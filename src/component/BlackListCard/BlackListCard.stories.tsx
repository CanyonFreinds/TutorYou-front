import React from 'react';
import { action } from '@storybook/addon-actions';
import BlackListCard from '.';

export default {
  title: 'BlackListCard',
  component: BlackListCard,
};

const clickAction = action('click');
const dummyBlack = {
  point: 1.3,
  teacherId: 0,
  teacherName: '조개소년',
  imageSrc: '',
  banCount: 121,
  baned: true,
};

const dummyBlack2 = {
  point: 1.2,
  teacherId: 1,
  teacherName: '조개소년',
  imageSrc: '',
  banCount: 121,
  baned: false,
};

export const notBlock = () => <BlackListCard info={dummyBlack} clickButton={clickAction} />;

export const block = () => <BlackListCard info={dummyBlack2} clickButton={clickAction} />;
