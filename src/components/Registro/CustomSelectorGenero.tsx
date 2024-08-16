/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import "./CustomSelector.css";

interface SelectorGeneroProps {
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error: string;
  value: number;
  icon: React.ReactNode;
}

const SelectorGenero: React.FC<SelectorGeneroProps> = ({
  options,
  onChange,
  error,
  value,
  icon,
}) => {
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsOptionDisabled(true); // Deshabilitamos la opción nula después de que el usuario haya seleccionado algo
    onChange(e); // Llamamos a la función onChange proporcionada por el padre
  };

  return (
    <div className="custom-form-field">
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <select
          value={value}
          onChange={handleOnChange}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        >
          {options.map((option) => (
            <option
              key={option.identificador_TipoGenero}
              value={option.identificador_TipoGenero}
              disabled={option.identificador_TipoGenero === -1 && isOptionDisabled}
            >
              {option.descripcion}
            </option>
          ))}
        </select>
      </div>
      {error && <small className="error-message">{error}</small>}
    </div>
  );
};

export default SelectorGenero;