import React from "react";
import "./Modal.css";

// Definimos el tipo para las props del componente Modal
interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal fade show d-block" : "modal fade";

  return (
    <div
      className={showHideClassName}
      id="exampleModalLong"
      tabIndex={-1} // Cambiado de "-1" a "-1" como número, para que sea un valor válido en TypeScript
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
