import React, { useState } from "react";
import "./CustomSelector.css";

// Definimos la interfaz para las opciones
interface Option {
  identificador_TipoGenero: number;
  descripcion: string;
}

// Definimos la interfaz para las props del componente SelectorGenero
interface SelectorGeneroProps {
  options: Option[];
  error?: string; // Prop opcional
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Tipo para onChange
}

const SelectorGenero: React.FC<SelectorGeneroProps> = ({ options, error, onChange }) => {
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const inputClassName = `form-control ${error ? "error" : ""}`;
  const icon = <i className="fas fa-venus-mars"></i>;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsOptionDisabled(true); // Deshabilitamos la opción nula después de que el usuario haya seleccionado algo
    onChange(e); // Llamamos a la función onChange proporcionada por el padre
  };

  return (
    <div className="custom-form-field">
      <label className="label">Género:</label>
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <select className={inputClassName} onChange={handleOnChange}>
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
