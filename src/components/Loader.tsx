import { motion } from 'framer-motion';
import styled from 'styled-components';
import LogoMR from '../assets/mr_logo.png';
import TextureOverlay from '../assets/TEXTURA VIxxxxx.png'; 

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
  z-index: 9999; 
`;

const Texture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${TextureOverlay}); 
  opacity: 0.1; 
`;

const LogoImage = styled(motion.img)`
  width: 60%; 
  max-width: 248px;
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
        duration: 0.8, 
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
        duration: 0.8, 
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
      <Texture /> 
      <LogoImage
        src={LogoMR}
        alt="MetroRed Loader"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </Container>
  );
};

export default Loader;
