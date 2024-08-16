/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './CustomFormField.css';

interface CustomFormFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  error: string;
  label: string;
  icon?: React.ReactNode;
  onBlur?: () => void;
  containerClassName?: string;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  error,
  label,
  icon, // Agregamos la propiedad icon
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        {icon && (
          <span className="input-icon">{icon}</span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
        />
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default CustomFormField;