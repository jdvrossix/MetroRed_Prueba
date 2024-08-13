import HeroPagoQR from "../components/HeroPagoQR";
import qrImage from "../assets/img_04.png";

const PagoQR = () => {
  return (
    <>
      <HeroPagoQR />
      <section id="paga-con-qr" className="container py-6 sm:py-12 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Paga con QR
        </h2>

        <p className="text-sm md:text-base max-w-2xl mx-auto text-center">
          Descarga BusApp en Google Play o App Store, crea tu cuenta y recarga fácilmente mediante el botón de pago. 
          Olvídate del efectivo y vive una experiencia de transporte accesible y eficiente. 
          Con esta opción, tus pagos serán más rápidos y seguros, permitiéndote disfrutar de cada viaje sin preocupaciones.
        </p>

        {/* Imagen debajo del título */}
        <div className="flex justify-center">
          <img
            src={qrImage}
            alt="Pago con QR"
            className="w-1/2 md:w-1/3 rounded-lg mb-4 object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default PagoQR;
