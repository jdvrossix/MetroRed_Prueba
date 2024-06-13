import desktopImage from '../assets/Listado (1).png'; 
import mobileImage from '../assets/ListadoM.png'; 
import '../assets/Pagina.css';

const ListadoPuntos = () => {
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

export default ListadoPuntos;
