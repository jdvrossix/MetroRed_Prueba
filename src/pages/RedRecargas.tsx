import desktopImage from '../assets/Recargas.png'; 
import mobileImage from '../assets/RecargasM.png'; 
import '../assets/Pagina.css';

const RedRecargas = () => {
  return (
    <div className="pagina-container">      <img
        src={desktopImage}
        alt="Imagen para escritorio"
        className="pagina-image desktop-image"
      />
      <img
        src={mobileImage}
        alt="Imagen para móviles"
        className="pagina-image mobile-image"
      />
    </div>
  );
};

export default RedRecargas;
