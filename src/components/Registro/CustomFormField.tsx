/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, InputHTMLAttributes } from "react";
import "./CustomFormField.css";

interface CustomFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hintText?: string;
  error?: string;
  type?: string;
  icon?: React.ReactNode;
  onBlurCallback?: (value: string) => Promise<boolean>;
  errorMessage?: string;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  hintText,
  error,
  type = "text",
  icon,
  onBlurCallback,
  errorMessage,
  ...rest
}) => {
  const [internalError, setInternalError] = useState<string | null>(null);

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurCallback) {
      const isValid = await onBlurCallback(e.target.value);
      if (!isValid) {
        setInternalError(errorMessage || "Invalid value");
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
