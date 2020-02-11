import React from 'react';
import { render } from '@testing-library/react';
import Front from './Front';
import { BrowserRouter } from 'react-router-dom';

test('renders without errors', () => {
  const { getByTestId } = render(<BrowserRouter><Front /></BrowserRouter>);
  const element = getByTestId('front');
});
