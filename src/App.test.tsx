import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    const element = screen.getByText(/Przlicznik/i);
    expect(element).toBeInTheDocument();
  });
 })