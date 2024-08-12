import { Card, CardContent } from "@/components/ui/card";
import busAppImage from "../assets/busapp.png"; // Imagen de BusApp
import appStoreImage from "../assets/appstore.png"; // Imagen de App Store
import playStoreImage from "../assets/googleplay.png"; // Imagen de Google Play

const BusApp = () => {
  return (
    <section id="busapp" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">BusApp</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row">
          <Card className="flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden lg:w-1/2">
            <CardContent className="p-6 flex flex-col justify-center items-center text-center lg:text-left h-full">
              <h2 className="font-bold text-xl lg:text-2xl mb-4 text-center">
                Descarga gratis la app de BusApp
              </h2>
              <p className="text-sm md:text-base text-justify mb-4">
                Facilita tu día a día con BusApp: en la cual podrás administrar tu saldo y tarjetas, planificar tus viajes, pagar con QR y recargar tus tarjetas, además de disfrutar de una variedad más de beneficios. Nuestra aplicación está diseñada para hacer tu vida más fácil y cómoda.
              </p>
              <div className="flex justify-center lg:justify-start">
                <img src={appStoreImage} alt="App Store" className="additional-image mx-2" />
                <a href="https://play.google.com/store/apps/details?id=com.busmatick.busapp_v2&hl=es_CO&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
                  <img src={playStoreImage} alt="Google Play" className="additional-image mx-2" />
                </a>
              </div>
            </CardContent>
          </Card>
          <div className="relative lg:w-1/2 mt-4 lg:mt-0">
            <img
              src={busAppImage}
              alt="BusApp"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusApp;

