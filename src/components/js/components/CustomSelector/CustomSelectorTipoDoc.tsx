import React, { useState } from "react";
import "./CustomSelector.css";

// Definimos la interfaz para las opciones
interface Option {
  identificador_TipoDocumentoIdentificativo: number;
  nombre_TipoDocumentoIdentificativo: string;
}

// Definimos la interfaz para las props del componente SelectorTipoDoc
interface SelectorTipoDocProps {
  options: Option[];
  error?: string; // Prop opcional
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Tipo para onChange
}

const SelectorTipoDoc: React.FC<SelectorTipoDocProps> = ({ options, error, onChange }) => {
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const inputClassName = `form-control ${error ? "error" : ""}`;
  const icon = <i className="fas fa-id-card"></i>;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsOptionDisabled(true); // Deshabilitamos la opción nula después de que el usuario haya seleccionado algo
    onChange(e); // Llamamos a la función onChange proporcionada por el padre
  };

  return (
    <div className="custom-form-field">
      <label className="label">Tipo de Documento:</label>
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <select className={inputClassName} onChange={handleOnChange}>
          {options.map((option) => (
            <option
              key={option.identificador_TipoDocumentoIdentificativo}
              value={option.identificador_TipoDocumentoIdentificativo}
              disabled={option.identificador_TipoDocumentoIdentificativo === -1 && isOptionDisabled}
            >
              {option.nombre_TipoDocumentoIdentificativo}
            </option>
          ))}
        </select>
      </div>
      {error && <small className="error-message">{error}</small>}
    </div>
  );
};

export default SelectorTipoDoc;
