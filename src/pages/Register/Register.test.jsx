import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider, useUser } from '../../context/UserContext';
import Register from './Register';

const LocationProbe = () => {
  const location = useLocation();

  return <div data-testid="location">{location.pathname}</div>;
};

const UserSnapshot = () => {
  const { user } = useUser();

  return <pre data-testid="registered-user">{JSON.stringify(user)}</pre>;
};

const renderRegister = () =>
  render(
    <ThemeProvider>
      <UserProvider>
        <MemoryRouter initialEntries={['/register']}>
          <Register />
          <UserSnapshot />
          <Routes>
            <Route path="*" element={<LocationProbe />} />
          </Routes>
        </MemoryRouter>
      </UserProvider>
    </ThemeProvider>,
  );

const fillValidRegistration = async user => {
  await user.type(screen.getByLabelText('Full name'), 'Jane Doe');
  await user.type(screen.getByLabelText('Email'), 'Jane@Example.com');
  await user.type(screen.getByLabelText('Password'), 'Password1!');
  await user.type(screen.getByLabelText('Confirm password'), 'Password1!');
};

describe('Register', () => {
  test('renders the controlled registration form', () => {
    renderRegister();

    expect(screen.getByLabelText('Full name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
    expect(screen.getByLabelText('Confirm password')).toHaveAttribute('type', 'password');
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
  });

  test('validates a field when it loses focus', async () => {
    const user = userEvent.setup();
    renderRegister();

    await user.type(screen.getByLabelText('Full name'), 'J');
    await user.click(screen.getByLabelText('Email'));

    expect(screen.getByText('Enter 2–60 characters using letters, spaces, hyphens, apostrophes, or periods.')).toBeInTheDocument();
    expect(screen.getByLabelText('Full name')).toHaveAttribute('aria-invalid', 'true');
  });

  test('revalidates a touched field as it changes after a submit attempt', async () => {
    const user = userEvent.setup();
    renderRegister();

    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    expect(screen.getByText('Full name is required.')).toBeInTheDocument();

    await user.type(screen.getByLabelText('Full name'), 'Jane Doe');

    expect(screen.queryByText('Full name is required.')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Full name')).toHaveAttribute('aria-invalid', 'false');
  });

  test('shows a confirmation mismatch and focuses the confirmation field', async () => {
    const user = userEvent.setup();
    renderRegister();
    await fillValidRegistration(user);
    await user.clear(screen.getByLabelText('Confirm password'));
    await user.type(screen.getByLabelText('Confirm password'), 'Password2!');

    await user.click(screen.getByRole('button', { name: 'Create Account' }));

    expect(screen.getByText('Passwords do not match.')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toHaveFocus();
  });

  test('focuses the first invalid field and exposes submission errors', async () => {
    const user = userEvent.setup();
    renderRegister();

    await user.click(screen.getByRole('button', { name: 'Create Account' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Please correct the highlighted fields');
    expect(screen.getByText('Full name is required.')).toBeInTheDocument();
    expect(screen.getByLabelText('Full name')).toHaveFocus();
  });

  test('stores only normalized profile data, navigates, and resets the form', async () => {
    const user = userEvent.setup();
    renderRegister();
    await fillValidRegistration(user);

    await user.click(screen.getByRole('button', { name: 'Create Account' }));

    await waitFor(() => {
      expect(screen.getByTestId('location')).toHaveTextContent('/profile');
    });
    expect(screen.getByTestId('registered-user')).toHaveTextContent('"fullName":"Jane Doe"');
    expect(screen.getByTestId('registered-user')).toHaveTextContent('"email":"jane@example.com"');
    expect(screen.getByTestId('registered-user')).not.toHaveTextContent('password');
    expect(screen.getByLabelText('Full name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Password')).toHaveValue('');
    expect(screen.getByLabelText('Confirm password')).toHaveValue('');
  });
});
