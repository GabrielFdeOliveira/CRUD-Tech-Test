import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home'

describe('Home page', () => {
    test('renders without crashing', () => {
        render(<Home />);
      });   
    test('displays a table', () => {
        render(<Home />);
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });
    test('displays the correct table headings', () => {
        render(<Home />);
        const headings = screen.getAllByRole('columnheader');
        expect(headings[0]).toHaveTextContent('ID');
        expect(headings[1]).toHaveTextContent('First Name');
        expect(headings[2]).toHaveTextContent('Last Name');
        expect(headings[3]).toHaveTextContent('Email');
        expect(headings[4]).toHaveTextContent('Actions');
    });   
  });