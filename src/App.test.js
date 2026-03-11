import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/connected bike/i);
  expect(heading).toBeInTheDocument();
});
