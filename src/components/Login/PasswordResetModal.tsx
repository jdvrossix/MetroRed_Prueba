import React, { useState } from "react";
import ApiService from "../../components/Registro/Services/ApiService"; 
import "./PasswordResetModal.css";

interface PasswordResetModalProps {
  show: boolean;
  handleClose: () => void;
}

const PasswordResetModal: React.FC<PasswordResetModalProps> = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); 

    try {
      // Llama a la función de la API para restablecer la contraseña
      const response = await ApiService.resetPassword(email);

      if (response.isSuccess) {
        setMessage(response.message);
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage("Ocurrió un error al intentar enviar el enlace. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contentPR">
        <div className="modal-header">
          <h3>Restablecer Contraseña</h3>
          <button className="close-button" onClick={handleClose}>&times;</button>
        </div>
        <form onSubmit={handleResetPassword} className="modal-body">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal-input"
            required
          />
          <button type="submit" className="modal-button" disabled={loading}>
            {loading ? "Enviando..." : "Enviar Enlace"}
          </button>
        </form>
        {message && <p className="modal-message">{message}</p>}
      </div>
    </div>
  );
};

export default PasswordResetModal;
