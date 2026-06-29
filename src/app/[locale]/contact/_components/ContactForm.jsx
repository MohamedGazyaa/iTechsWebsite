'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './PhoneInputOverrides.css';

const NAME_REGEX = /^[\p{L}\s'\-]+$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  description: '',
};

function validate(values, t) {
  return {
    firstName: !values.firstName.trim()
      ? t('errors.required')
      : !NAME_REGEX.test(values.firstName.trim())
        ? t('errors.lettersOnly')
        : undefined,
    lastName: !values.lastName.trim()
      ? t('errors.required')
      : !NAME_REGEX.test(values.lastName.trim())
        ? t('errors.lettersOnly')
        : undefined,
    phone: !values.phone
      ? t('errors.required')
      : undefined,
    email: !values.email.trim()
      ? t('errors.required')
      : !EMAIL_REGEX.test(values.email.trim())
        ? t('errors.invalidEmail')
        : undefined,
    description: !values.description.trim()
      ? t('errors.required')
      : undefined,
  };
}

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold text-itechsBlue">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  'w-full rounded-md border bg-white px-4 py-3 text-sm text-itechsBlue placeholder:text-itechsBlue/40 outline-none focus:ring-2 transition-shadow';
const inputNormal = `${inputBase} border-itechsBlue/30 focus:ring-itechsTeal`;
const inputError  = `${inputBase} border-red-400 focus:ring-red-400`;

export default function ContactForm() {
  const t = useTranslations('contactPage');
  const [values, setValues]   = useState(INITIAL_VALUES);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [phoneError, setPhoneError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, ...validate(next, t) }));
    }
  };

  const handlePhoneChange = (phone) => {
    const next = { ...values, phone: phone ?? '' };
    setValues(next);
    setPhoneError('');
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, ...validate(next, t) }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, ...validate(values, t) }));
  };

  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    setErrors((prev) => ({ ...prev, ...validate(values, t) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(INITIAL_VALUES).map((k) => [k, true])
    );
    setTouched(allTouched);
    const validationErrors = validate(values, t);
    setErrors(validationErrors);

    const newPhoneError =
      values.phone && !isPossiblePhoneNumber(values.phone)
        ? t('phone.invalidError')
        : '';
    setPhoneError(newPhoneError);

    if (Object.values(validationErrors).some(Boolean) || newPhoneError) return;

    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          email: values.email,
          description: values.description,
        }),
      });
      if (!res.ok) throw new Error('API error');
      setValues(INITIAL_VALUES);
      setTouched({});
      setErrors({});
      setPhoneError('');
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-2xl flex flex-col gap-6"
    >
      {/* First Name / Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id="firstName" label={t('firstName')} error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.firstName ? inputError : inputNormal}
            aria-invalid={!!errors.firstName}
          />
        </Field>

        <Field id="lastName" label={t('lastName')} error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName ? inputError : inputNormal}
            aria-invalid={!!errors.lastName}
          />
        </Field>
      </div>

      {/* Phone */}
      <Field id="phone" label={t('phone.label')} error={errors.phone || phoneError}>
        <PhoneInput
          id="phone"
          defaultCountry="EG"
          value={values.phone || undefined}
          onChange={handlePhoneChange}
          international
          countryCallingCodeEditable={false}
          onBlur={handlePhoneBlur}
          aria-invalid={!!(errors.phone || phoneError)}
          className={(errors.phone || phoneError) ? 'PhoneInput--error' : undefined}
        />
      </Field>

      {/* Email */}
      <Field id="email" label={t('email')} error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email ? inputError : inputNormal}
          aria-invalid={!!errors.email}
        />
      </Field>

      {/* Description */}
      <Field id="description" label={t('description')} error={errors.description}>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.description ? inputError : inputNormal} resize-none`}
          aria-invalid={!!errors.description}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="self-start rounded-md bg-itechsBlue px-8 py-3 text-sm font-semibold text-white hover:bg-itechsTeal transition-colors focus:outline-none focus:ring-2 focus:ring-itechsTeal disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? t('submitting') : t('submit')}
      </button>

      {submitStatus === 'success' && (
        <p role="status" className="text-sm text-green-600">{t('successMessage')}</p>
      )}
      {submitStatus === 'error' && (
        <p role="alert" className="text-sm text-red-500">{t('submitError')}</p>
      )}
    </form>
  );
}
