import HeroTarjetas from "../components/HeroTarjetas"; 
import tarjetaImage from "../assets/img_05.png"; 

const Tarjetas = () => {
  return (
    <>
    <HeroTarjetas />
    <section id="tarjetas" className="container py-6 sm:py-12 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Tarjetas
      </h2>

      <p className="text-sm md:text-base text-center max-w-2xl mx-auto">
        Metrored te permite vincular tu tarjeta de transporte con tu usuario, ya sea Citybus, Urbanpass o MiPase. Esta integración ofrece una experiencia de pago más rápida y eficiente, asegurando que puedas gestionar tus viajes de manera sencilla.
      </p>

     
      

      {/* Imagen debajo del título */}
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-lg overflow-hidden mb-4">
          <img
            src={tarjetaImage}
            alt="Tarjetas de transporte"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Tarjetas;
