/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface CustomModalRespProps {
  show: boolean;
  onClose: () => void;
  response: any; // Ajusta este tipo según tu necesidad
}

const ModalResp: React.FC<CustomModalRespProps> = ({ show, onClose, response }) => {
  if (!show) return null; // No renderiza el modal si no se debe mostrar

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Respuesta</h2>
        <p>{response?.message}</p>
      </div>
    </div>
  );
};

export default ModalResp;

