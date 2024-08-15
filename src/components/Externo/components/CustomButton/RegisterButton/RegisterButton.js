import React from 'react';
// import { Link } from 'react-router-dom';
import '../RegisterButton/RegisterButton.css';

const RegisterButton = () => {
  return (
    <div className="button-container">
      <a className="btn register-button" href="/registrar">
        Regístrate
      </a>
    </div>
  );
};

export default RegisterButton;