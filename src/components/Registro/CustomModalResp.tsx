import { useState, useEffect } from 'react';
import "./CustomModalResp.css";

interface Props {
  show: boolean;
  handleClose: () => void;
  response: {
    isSuccess: boolean;
    message: string;
  };
}

function CustomModalResp({ show, handleClose, response }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  if (!response || !isVisible) return <div />;

  const { isSuccess, message } = response;
  const showHideClassName = isVisible ? "modal fade show d-block" : "modal fade";

  return  (
    <div
      className={showHideClassName}
      id="exampleModalLong"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog vertical-align-center" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isSuccess ? "Registro Exitoso" : "Registro Fallido"}
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
          <div className="modal-body">
            <div className="icon-wrapper">
              {isSuccess ? (
                <i className="fas fa-check-circle text-success icon-large"></i>
              ) : (
                <i className="fas fa-times-circle text-danger icon-large"></i>
              )}
            </div>
            <p className="message-text">{message}</p>
            {isSuccess && (
              <div>
                <p>¡Gracias por registrarte! </p>
                <p>Por favor, verifica tu correo electrónico para configurar tu contraseña de acceso y activar tu cuenta.</p>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomModalResp;