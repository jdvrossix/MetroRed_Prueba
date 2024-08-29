import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/mr_logo.png";
import "./Login.css";
import PasswordResetModal from "./PasswordResetModal";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
      <Link to="#" onClick={() => setShowResetModal(true)} className="forgot-password-link">
        ¿Olvidaste tu contraseña?
      </Link>

      <PasswordResetModal
        show={showResetModal}
        handleClose={() => setShowResetModal(false)}
      />
    </div>
  );
};

export default Login;