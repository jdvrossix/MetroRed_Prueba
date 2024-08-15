import React,{useState} from "react";
import "./CustomSelector.css";

const SelectorTipoDoc = ({ options, error, onChange }) => {
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const inputClassName = `form-control ${error ? "error" : ""}`;
  const icon = <i className="fas fa-id-card"></i>;

  const handleOnChange = (e) => {
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
