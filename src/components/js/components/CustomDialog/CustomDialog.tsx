/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface CustomDialogProps {
  show: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
}

function CustomDialog({ show, handleClose, children }: CustomDialogProps) {
  const dialogStyle = {
    display: show ? 'block' : 'none',
    position: 'fixed' as 'fixed', 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000, 
  };


  const imgStyle = {
    maxWidth: '85vw',
    maxHeight: '85vh',
    borderRadius: '8px',
  };

  const closeButtonStyle = {
    position: 'absolute' as 'absolute', 
    top: '-13px',
    right: '-13px',
    width: '35px',
    height: '35px',
    display: 'flex' as 'flex', 
    alignItems: 'center' as 'center', 
    justifyContent: 'center' as 'center', 
    borderRadius: '10%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  const closeIconStyle = {
    fontSize: '24px',
    color: '#555',
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {show && (
        <div>
          <div style={dialogStyle} onClick={handleOverlayClick}>
            <div style={closeButtonStyle} onClick={handleClose}>
              <span style={closeIconStyle}>&times;</span>
            </div>
            <img src="./img/Campana1_TAM.png" alt="Imagen" style={imgStyle} />
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: '999',
            }}
            onClick={handleOverlayClick}
          />
        </div>
      )}
    </>
  );
}

export default CustomDialog;