import desktopImage from '../assets/Mapa (2).png'; 
import mobileImage from '../assets/MapaM.png'; 
import '../assets/Pagina.css';

const Mapa = () => {
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

export default Mapa;
