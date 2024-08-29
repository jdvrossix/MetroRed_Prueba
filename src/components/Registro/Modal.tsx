import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  isSuccess: boolean;
  handleClose: () => void;
  errorMessage?: string; 
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ show, isSuccess, handleClose, errorMessage, className }) => {
  const showHideClassName = show ? `modal fade show d-block ${className}` : `modal fade ${className}`;

  return (
    <div
      className={showHideClassName}
      id="exampleModalLong"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {isSuccess ? "Registro Exitoso" : "Registro Fallido"}
            </h5>
            <button
              type="button"
              aria-label="Close"
              onClick={handleClose}
            >
              <span className="close-button" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {isSuccess ? (
              <>
                <FaCheckCircle className="icon-large text-success" />
                <p>¡Gracias por registrarte!</p>
                <p className="modal-text">
                  Por favor, verifica tu correo electrónico para configurar tu contraseña de acceso y activar tu cuenta.
                </p>
              </>
            ) : (
              <>
                <FaTimesCircle className="icon-large text-danger" />
                <p>Hubo un problema con tu registro.</p> 
                {errorMessage && <p className="modal-text">{errorMessage}</p>} 
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
