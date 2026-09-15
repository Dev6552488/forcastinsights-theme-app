export const NAME_PATTERN = /^[A-Za-z' .-]+$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;

export const normalizeFullName = value => value.trim();
export const normalizeEmail = value => value.trim().toLowerCase();

export const validateFullName = value => {
  const normalizedValue = normalizeFullName(value);

  if (!normalizedValue) {
    return 'Full name is required.';
  }

  if (
    normalizedValue.length < 2 ||
    normalizedValue.length > 60 ||
    !NAME_PATTERN.test(normalizedValue)
  ) {
    return 'Enter 2–60 characters using letters, spaces, hyphens, apostrophes, or periods.';
  }

  return '';
};

export const validateEmail = value => {
  const normalizedValue = normalizeEmail(value);

  if (!normalizedValue) {
    return 'Email is required.';
  }

  if (!EMAIL_PATTERN.test(normalizedValue)) {
    return 'Enter a valid email address.';
  }

  return '';
};

export const validatePassword = value => {
  if (!value) {
    return 'Password is required.';
  }

  if (!PASSWORD_PATTERN.test(value)) {
    return 'Use at least 8 characters with an uppercase letter, lowercase letter, number, and special character.';
  }

  return '';
};

export const validateConfirmPassword = (value, password) => {
  if (!value) {
    return 'Please confirm your password.';
  }

  if (value !== password) {
    return 'Passwords do not match.';
  }

  return '';
};

export const validateRegistrationField = (fieldName, values) => {
  switch (fieldName) {
    case 'fullName':
      return validateFullName(values.fullName);
    case 'email':
      return validateEmail(values.email);
    case 'password':
      return validatePassword(values.password);
    case 'confirmPassword':
      return validateConfirmPassword(values.confirmPassword, values.password);
    default:
      return '';
  }
};

export const validateRegistrationForm = values => ({
  fullName: validateFullName(values.fullName),
  email: validateEmail(values.email),
  password: validatePassword(values.password),
  confirmPassword: validateConfirmPassword(values.confirmPassword, values.password),
});
