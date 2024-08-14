/* eslint-disable @typescript-eslint/no-explicit-any */

import "./CustomSelector.css";

import React from 'react';

interface SelectorTipoDocProps {
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error: string;
  value: number;
  icon: React.ReactNode; // Agregamos la propiedad icon
}

const SelectorTipoDoc: React.FC<SelectorTipoDocProps> = ({
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
          <option key={option.identificador_TipoDocumentoIdentificativo} value={option.identificador_TipoDocumentoIdentificativo}>
            {option.nombre_TipoDocumentoIdentificativo}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectorTipoDoc;