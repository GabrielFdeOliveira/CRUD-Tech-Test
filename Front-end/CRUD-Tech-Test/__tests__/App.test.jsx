import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App.jsx';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  test('renders the Header component', () => {
    render(<App />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the Home page by default', () => {
    render(<App />);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });
});
