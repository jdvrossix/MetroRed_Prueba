/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./CustomFormField.css";

interface CustomFormFieldProps {
  label: string;
  hintText?: string;
  error?: string;
  type: string;
  icon?: React.ReactNode; // Flexible type for icon content
  onBlurCallback?: (value: string) => Promise<boolean>;
  errorMessage?: string;
  // Spread for other props
  [rest: string]: any;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  hintText,
  error,
  type,
  icon,
  onBlurCallback,
  errorMessage,
  ...rest
}) => {
  const [internalError, setInternalError] = useState<string | null>(null);

  const handleBlur = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlurCallback) {
      const isValid = await onBlurCallback(e.target.value);
      if (!isValid) {
        setInternalError(errorMessage || ''); 
      } else {
        setInternalError(null);
      }
    }
  };

  const inputClassName = `form-control ${error || internalError ? "error" : ""}`;

  return (
    <div className="custom-form-field">
      <label className="label">{label}</label>
      <div className="input-container">
        <input
          type={type}
          className={inputClassName}
          placeholder={hintText}
          onBlur={handleBlur}
          {...rest}
        />
        {icon && <span className="input-icon">{icon}</span>}
      </div>
      {error && <small className="error-message">{error}</small>}
      {internalError && <small className="error-message">{internalError}</small>}
    </div>
  );
};

export default CustomFormField;