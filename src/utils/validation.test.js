import {
  EMAIL_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN,
  normalizeEmail,
  normalizeFullName,
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
  validateRegistrationForm,
} from './validation';

describe('validation patterns', () => {
  test('exports the registration regex patterns', () => {
    expect(NAME_PATTERN.test("Anne-Marie O'Connor Jr.")).toBe(true);
    expect(EMAIL_PATTERN.test('person@example.com')).toBe(true);
    expect(PASSWORD_PATTERN.test('Password1!')).toBe(true);
  });
});

describe('normalizeFullName', () => {
  test('trims surrounding whitespace', () => {
    expect(normalizeFullName('  Jane Doe  ')).toBe('Jane Doe');
  });
});

describe('normalizeEmail', () => {
  test('trims and lowercases the address', () => {
    expect(normalizeEmail('  Jane@Example.COM ')).toBe('jane@example.com');
  });
});

describe('validateFullName', () => {
  test('requires a full name', () => {
    expect(validateFullName('   ')).toBe('Full name is required.');
  });

  test('rejects names outside the length and character rules', () => {
    expect(validateFullName('A')).toBe(
      'Enter 2–60 characters using letters, spaces, hyphens, apostrophes, or periods.',
    );
    expect(validateFullName('Jane1')).toBe(
      'Enter 2–60 characters using letters, spaces, hyphens, apostrophes, or periods.',
    );
  });

  test('accepts supported punctuation and spaces', () => {
    expect(validateFullName("Anne-Marie O'Connor Jr.")).toBe('');
  });
});

describe('validateEmail', () => {
  test('requires an email', () => {
    expect(validateEmail('   ')).toBe('Email is required.');
  });

  test('rejects invalid email formats', () => {
    expect(validateEmail('not-an-email')).toBe('Enter a valid email address.');
    expect(validateEmail('person@example')).toBe('Enter a valid email address.');
  });

  test('accepts a valid email', () => {
    expect(validateEmail('person@example.com')).toBe('');
  });
});

describe('validatePassword', () => {
  test('requires a password', () => {
    expect(validatePassword('')).toBe('Password is required.');
  });

  test('rejects passwords missing complexity requirements', () => {
    expect(validatePassword('password')).toBe(
      'Use at least 8 characters with an uppercase letter, lowercase letter, number, and special character.',
    );
    expect(validatePassword('Password')).toBe(
      'Use at least 8 characters with an uppercase letter, lowercase letter, number, and special character.',
    );
  });

  test('allows spaces as password characters', () => {
    expect(validatePassword('Pass word1!')).toBe('');
  });

  test('does not let spaces satisfy the special-character requirement', () => {
    expect(validatePassword('Password 1')).toBe(
      'Use at least 8 characters with an uppercase letter, lowercase letter, number, and special character.',
    );
  });
});

describe('validateConfirmPassword', () => {
  test('requires confirmation', () => {
    expect(validateConfirmPassword('', 'Password1!')).toBe('Please confirm your password.');
  });

  test('requires an exact match', () => {
    expect(validateConfirmPassword('Password2!', 'Password1!')).toBe('Passwords do not match.');
    expect(validateConfirmPassword('Password1!', 'Password1!')).toBe('');
  });
});

describe('validateRegistrationForm', () => {
  test('returns errors for every invalid field', () => {
    expect(
      validateRegistrationForm({
        fullName: '',
        email: 'invalid',
        password: 'short',
        confirmPassword: '',
      }),
    ).toEqual({
      fullName: 'Full name is required.',
      email: 'Enter a valid email address.',
      password:
        'Use at least 8 characters with an uppercase letter, lowercase letter, number, and special character.',
      confirmPassword: 'Please confirm your password.',
    });
  });

  test('returns no errors for a complete valid form', () => {
    expect(
      validateRegistrationForm({
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        password: 'Password1!',
        confirmPassword: 'Password1!',
      }),
    ).toEqual({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  });
});
