import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

test('renders without errors', () => {
  const { getByTestId } = render(<BrowserRouter><Dashboard /></BrowserRouter>);
  const element = getByTestId('dashboard');
});
