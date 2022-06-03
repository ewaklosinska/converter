import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';


describe('App component', () => {
  test('it renders', () => {
    render(<About />);
    const element = screen.getByText(/Kalkulator/i);
    expect(element).toBeInTheDocument();
  });
 })