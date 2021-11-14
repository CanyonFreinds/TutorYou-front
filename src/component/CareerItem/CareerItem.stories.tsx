import React from 'react';
import { action } from '@storybook/addon-actions';
import { CareerType } from '../../api/career';
import CareerItem from '.';

export default {
  title: 'CareerItem',
  component: CareerItem,
};

const addItemAction = action('add item');
const deleteItemAction = action('delete submit');
const dummyData: CareerType[] = [
  { careerId: 1, content: 'hello', careerType: 'EDUCATION_LEVEL' },
  { careerId: 2, content: 'bye', careerType: 'EDUCATION_LEVEL' },
];

export const careerItem = () => (
  <CareerItem title="경력" values={dummyData} addItem={addItemAction} deleteItem={deleteItemAction} />
);
