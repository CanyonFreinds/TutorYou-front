import React from 'react';
import { action } from '@storybook/addon-actions';
import BlackListCard, { InfoType } from '.';

export default {
  title: 'BlackListCard',
  component: BlackListCard,
};

const clickAction = action('click');
const dummyBlack: InfoType = {
  imageSrc: 'https://avatars.githubusercontent.com/u/26402298?v=4',
  nickname: '조개소년',
  hateCount: 121,
  isBlackList: true,
};

const dummyBlack2: InfoType = {
  imageSrc: 'https://avatars.githubusercontent.com/u/26402298?v=4',
  nickname: '조개소년',
  hateCount: 121,
  isBlackList: false,
};

export const notBlock = () => <BlackListCard info={dummyBlack} clickButton={clickAction} />;

export const block = () => <BlackListCard info={dummyBlack2} clickButton={clickAction} />;
