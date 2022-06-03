import { render, screen } from '@testing-library/react';
import NavigationWithBS from '../NavigationWithBS';
import { MemoryRouter } from 'react-router-dom'

test('Navigation links', () => {
    render(
        <MemoryRouter>
            <NavigationWithBS />
        </MemoryRouter>);
      const linkElements = screen.getAllByRole("link");
      expect(linkElements.length).toBe(3);
});