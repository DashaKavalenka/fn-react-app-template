import React from 'react';
import { render, screen } from './utils/testUtils';
import { App } from './App';

test('Renders App component', () => {
  render(<App />);
  expect(screen.getByText(/app/i)).toBeInTheDocument();
});
