import desktopImage from '../assets/Tarjetas.png'; 
import mobileImage from '../assets/TarjetasM.png'; 
import '../assets/Pagina.css';

const Tarjetas = () => {
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

export default Tarjetas;
