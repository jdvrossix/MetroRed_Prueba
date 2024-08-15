import React, {useState} from "react";
import "./CustomFormField.css";


const CustomFormField = ({ label, hintText, error, type, icon, onBlurCallback, errorMessage, ...rest }) => {
    
  const [internalError, setInternalError] = useState(null);

  const handleBlur = async (e) => {
    if (onBlurCallback) {
      const isValid = await onBlurCallback(e.target.value);
      if (!isValid) {
        setInternalError(errorMessage);
      } else {
        setInternalError(null);
      }
    }
  };
    
  const inputClassName = `form-control ${error || internalError ? 'error' : ''}`;
  
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