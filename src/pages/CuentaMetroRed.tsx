import desktopImage1 from '../assets/img07.png';
import desktopImage2 from '../assets/img08.png';
import desktopImage3 from '../assets/img09.png';
import desktopImage4 from '../assets/img_04.png';
import desktopImage5 from '../assets/img_05.png';
import desktopImage6 from '../assets/img01.png'; 
import mobileImage from '../assets/img01.png'; 

import HeroCuentaMR from "../components/HeroCuentaMR"; 
import '../assets/Pagina.css';

const CuentaMetroRed = () => {
  return (
    <>
      <HeroCuentaMR /> 
      <div className="pagina-container py-6 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-20 mx-auto max-w-5xl"> 
          <div className="lg:w-1/2 p-6 flex flex-col justify-start" style={{ marginTop: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              Cuenta MetroRed
            </h2>
            <p className="text-base lg:text-lg text-justify">
              La cuenta Metrored es una cuenta virtual vinculada a tu usuario, ofreciendo una forma moderna y eficaz de gestionar tus pagos de transporte público. A través de esta cuenta, tienes la facilidad de pagar tus viajes generando un código QR directamente desde la aplicación BusApp en tu celular. Esta solución innovadora te brinda comodidad y rapidez, simplificando el proceso de pago en el transporte público. Además, puedes registrar tus tarjetas de transporte Citybus y Urbanpass.
            </p>
          </div>

          <div className="hidden lg:flex lg:w-1/2">
            <div className="flex flex-col" style={{ marginTop: '5px', marginRight: '20px' }}> 
              <img src={desktopImage1} alt="Imagen 1" className="w-full h-32 object-cover rounded-lg mb-2" />
              <img src={desktopImage3} alt="Imagen 3" className="w-full h-32 object-cover rounded-lg mb-2" />
              <img src={desktopImage5} alt="Imagen 5" className="w-full h-32 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col" style={{ marginTop: '50px' }}> 
              <img src={desktopImage2} alt="Imagen 2" className="w-full h-32 object-cover rounded-lg mb-2" />
              <img src={desktopImage4} alt="Imagen 4" className="w-full h-32 object-cover rounded-lg mb-2" />
              <img src={desktopImage6} alt="Imagen 6" className="w-full h-32 object-cover rounded-lg" />
            </div>
          </div>

          <div className="lg:hidden">
            <img src={mobileImage} alt="Imagen para móviles" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CuentaMetroRed;
