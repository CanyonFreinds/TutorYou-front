import React from 'react';
import { action } from '@storybook/addon-actions';
import CareerItem from '.';

export default {
  title: 'CareerItem',
  component: CareerItem,
};

const addItemAction = action('add item');
const deleteItemAction = action('delete submit');
const dummyData = [
  { careerId: '1', content: 'hello' },
  { careerId: '2', content: 'bye' },
];

export const careerItem = () => (
  <CareerItem title="경력" values={dummyData} addItem={addItemAction} deleteItem={deleteItemAction} />
);
