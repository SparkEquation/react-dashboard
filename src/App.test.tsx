import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders without errors', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>);
  const element = getByTestId('app');
});
