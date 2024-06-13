import desktopImage from '../assets/QueHago.png'; 
import mobileImage from '../assets/QueHagoM.png'; 
import '../assets/Pagina.css';

const CargaNoRealizada = () => {
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

export default CargaNoRealizada;
