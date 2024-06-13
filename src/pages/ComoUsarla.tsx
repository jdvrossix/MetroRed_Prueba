import desktopImage from '../assets/ComoUsar.png'; 
import mobileImage from '../assets/ComoUsarM.png'; 
import '../assets/Pagina.css';

const ComoUsarla = () => {
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

export default ComoUsarla;
