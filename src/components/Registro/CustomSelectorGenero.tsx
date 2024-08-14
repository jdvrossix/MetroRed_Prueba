/* eslint-disable @typescript-eslint/no-explicit-any */
import "./CustomSelector.css";

import React from 'react';

interface SelectorGeneroProps {
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error: string;
  value: string;
  icon: React.ReactNode; // Agregamos la propiedad icon
}

const SelectorGenero: React.FC<SelectorGeneroProps> = ({
  options,
  onChange,
  error,
  value,
  icon,
}) => {
  return (
    <div className="input-group">
      <span className="input-icon">
        {icon} {/* Renderizamos el icono aquí */}
      </span>
      <select
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
      >
        {options.map((option) => (
          <option key={option.identificador_TipoGenero} value={option.identificador_TipoGenero}>
            {option.descripcion}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectorGenero;