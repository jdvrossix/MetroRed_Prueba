import desktopImage from '../assets/Cuenta.png'; 
import mobileImage from '../assets/CuentaM.png'; 
import '../assets/Pagina.css';

const CuentaMetroRed = () => {
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

export default CuentaMetroRed;
