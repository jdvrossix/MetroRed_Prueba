import desktopImage from '../assets/PagaConQR.png'; 
import mobileImage from '../assets/PagaConQRM.png'; 
import '../assets/Pagina.css';

const PagoQR = () => {
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

export default PagoQR;
