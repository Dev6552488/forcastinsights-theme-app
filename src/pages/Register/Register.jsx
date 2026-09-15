import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { useUser } from '../../context/UserContext';
import {
  normalizeEmail,
  normalizeFullName,
  validateRegistrationField,
  validateRegistrationForm,
} from '../../utils/validation';
import './Register.css';

const FIELD_ORDER = ['fullName', 'email', 'password', 'confirmPassword'];
const INITIAL_VALUES = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const INITIAL_ERRORS = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const INITIAL_TOUCHED = {
  fullName: false,
  email: false,
  password: false,
  confirmPassword: false,
};

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const inputRefs = {
    fullName: useRef(null),
    email: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  const handleBlur = event => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setTouched(previousTouched => ({
      ...previousTouched,
      [name]: true,
    }));
    setErrors(previousErrors => ({
      ...previousErrors,
      [name]: validateRegistrationField(name, nextValues),
    }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);

    if (touched[name] || submitAttempted) {
      setErrors(previousErrors => ({
        ...previousErrors,
        [name]: validateRegistrationField(name, nextValues),
      }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nextErrors = validateRegistrationForm(values);
    const firstInvalidField = FIELD_ORDER.find(field => nextErrors[field]);

    setErrors(nextErrors);
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });
    setSubmitAttempted(true);

    if (firstInvalidField) {
      inputRefs[firstInvalidField].current.focus();
      return;
    }

    registerUser({
      fullName: normalizeFullName(values.fullName),
      email: normalizeEmail(values.email),
    });
    navigate('/profile', { replace: true });
    setValues(INITIAL_VALUES);
    setErrors(INITIAL_ERRORS);
    setTouched(INITIAL_TOUCHED);
    setSubmitAttempted(false);
  };

  return (
    <div className="page registration-page">
      <Navbar />
      <main className="main-content registration-content">
        <section className="registration-card" aria-labelledby="registration-title">
          <div className="registration-heading">
            <p className="registration-eyebrow">Get started</p>
            <h1 id="registration-title">Create your account</h1>
            <p className="registration-intro">
              Register to start exploring forecasts and analytics with ForcastInsights.
            </p>
          </div>

          {submitAttempted && Object.values(errors).some(Boolean) && (
            <div className="form-alert" role="alert">
              Please correct the highlighted fields and try again.
            </div>
          )}

          <form noValidate onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input
                ref={inputRefs.fullName}
                id="fullName"
                name="fullName"
                type="text"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              <p id="fullName-error" className="field-error" aria-live="polite">
                {errors.fullName}
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                ref={inputRefs.email}
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <p id="email-error" className="field-error" aria-live="polite">
                {errors.email}
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                ref={inputRefs.password}
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="new-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              <p id="password-error" className="field-error" aria-live="polite">
                {errors.password}
              </p>
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                ref={inputRefs.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="new-password"
                aria-invalid={Boolean(errors.confirmPassword)}
                aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
              />
              <p id="confirmPassword-error" className="field-error" aria-live="polite">
                {errors.confirmPassword}
              </p>
            </div>

            <button type="submit" className="registration-submit">
              Create Account
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 ForcastInsights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
