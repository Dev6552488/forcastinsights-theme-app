import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider } from '../../context/UserContext';
import Profile from './Profile';

const LocationProbe = () => {
  const location = useLocation();

  return <div data-testid="location">{location.pathname}</div>;
};

const renderProfile = initialUser =>
  render(
    <ThemeProvider>
      <UserProvider initialUser={initialUser}>
        <MemoryRouter initialEntries={['/profile']}>
          <Profile />
          <Routes>
            <Route path="*" element={<LocationProbe />} />
          </Routes>
        </MemoryRouter>
      </UserProvider>
    </ThemeProvider>,
  );

describe('Profile', () => {
  test('redirects visitors without a registered user', async () => {
    renderProfile(null);

    await waitFor(() => {
      expect(screen.getByTestId('location')).toHaveTextContent('/register');
    });
    expect(screen.queryByText('Welcome')).not.toBeInTheDocument();
  });

  test('renders only the normalized non-sensitive profile data', () => {
    renderProfile({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Password1!',
    });

    expect(screen.getByRole('heading', { name: 'Welcome, Jane Doe' })).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.queryByText('Password1!')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to Home' })).toHaveAttribute('href', '/');
  });
});
