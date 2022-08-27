import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const DoNotCopyPaste = e => e.preventDefault();

const EmailProps = {
  onCopy: DoNotCopyPaste,
  onPaste: DoNotCopyPaste,
  onCut: DoNotCopyPaste,
  style: { textTransform: 'lowercase' },
};

export default function FormInput({
  name,
  label,
  values,
  type,
  disabled,
  money = false,
  readOnly = false,
  required = true,
  isSubmitting,
  handleChange,
  helperText = '',
  handleBlur,
  errors,
  touched,
}) {
  return (
    <TextField
      fullWidth
      id={name}
      label={label}
      required={required}
      disabled={disabled || isSubmitting}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[name] || ''}
      type={type}
      error={!!touched[name] && !!errors[name]}
      variant="outlined"
      InputProps={{
        readOnly,
        startAdornment: money ? (
          <InputAdornment position="start">$</InputAdornment>
        ) : null,
      }}
      helperText={!!touched[name] && errors[name] ? errors[name] : helperText}
      {...(type === 'email' ? EmailProps : {})}
    />
  );
}
