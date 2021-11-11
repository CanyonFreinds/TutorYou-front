import React from 'react';
import { action } from '@storybook/addon-actions';
import CareerItem from '.';

export default {
  title: 'CareerItem',
  component: CareerItem,
};

const addItemAction = action('add item');
const deleteItemAction = action('delete submit');

export const careerItem = () => (
  <CareerItem title="경력" values={['hello', 'bye']} addItem={addItemAction} deleteItem={deleteItemAction} />
);
