import React from 'react';
import { action } from '@storybook/addon-actions';
import ProfileImage from '.';

export default {
  title: 'ProfileImage',
  component: ProfileImage,
};

const changeAction = action('on change');
const IMAGE_PATH = 'https://avatars.githubusercontent.com/u/26402298?v=4';

export const existImage = () => <ProfileImage imageSrc={IMAGE_PATH} changeImage={changeAction} />;

export const notExistImage = () => <ProfileImage imageSrc="" changeImage={changeAction} />;
