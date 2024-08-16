/* eslint-disable @typescript-eslint/no-explicit-any */

import "./CustomSelector.css";

import React from 'react';

interface SelectorTipoDocProps {
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error: string;
  value: number;
  icon: React.ReactNode; 
}

const SelectorTipoDoc: React.FC<SelectorTipoDocProps> = ({
  options,
  onChange,
  error,
  value,
  icon,
}) => {
  return (
    <div className="custom-form-field">
      <div className="input-container">
      {icon && <span className="input-icon">{icon}</span>}
      <select
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      >
        {options.map((option) => (
          <option key={option.identificador_TipoDocumentoIdentificativo} value={option.identificador_TipoDocumentoIdentificativo}>
            {option.nombre_TipoDocumentoIdentificativo}
          </option>
        ))}
      </select>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SelectorTipoDoc;