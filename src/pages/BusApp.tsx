import desktopImage from '../assets/BussApp.png'; 
import mobileImage from '../assets/BusAppM.png'; 
import '../assets/Pagina.css';

const BusApp = () => {
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

export default BusApp;
