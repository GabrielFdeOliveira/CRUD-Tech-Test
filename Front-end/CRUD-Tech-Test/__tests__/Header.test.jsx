import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const heading = screen.getByText('User Management System');
    expect(heading).toBeInTheDocument();
  });
});
