import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Boreaimg from '../assets/mr_logo.png';
import TextureOverlay from '../assets/TEXTURA VIxxxxx.png'; // Importa tu textura aquí

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9999; /* Asegúrate de que esté encima de todos los elementos */
`;

const Texture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${TextureOverlay}); /* Aplica la textura encima del fondo blanco */
  opacity: 0.1; /* Ajusta la opacidad al 10% */
`;

const LogoImage = styled(motion.img)`
  width: 60%; /* Ancho relativo para dispositivos móviles */
  max-width: 248px; /* Tamaño máximo para evitar que se vea pixelada en pantallas grandes */
  height: auto;
`;

const Loader = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8, // Reducido el tiempo de animación para mayor fluidez
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8, // Reducido el tiempo de animación para mayor fluidez
        ease: 'easeOut',
      },
    },
  };

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Texture /> {/* Textura superpuesta encima del fondo blanco */}
      <LogoImage
        src={Boreaimg}
        alt="Borea Loader"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </Container>
  );
};

export default Loader;
