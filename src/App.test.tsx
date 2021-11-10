/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App';
import { render } from './test-utils';

it('App test', () => {
  const component = render(<App />);

  component.getByText('hello-world');
});
